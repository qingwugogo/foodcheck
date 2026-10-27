const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

const fallbackIngredients = require('./ingredients-data.js')

exports.main = async (event, context) => {
  try {
    const {
      keyword = '',
      category = '',
      page = 1,
      pageSize = 20
    } = event
    const safePage = Math.max(1, Number(page) || 1)
    const safePageSize = Math.min(100, Math.max(1, Number(pageSize) || 20))

    // 优先查询数据库
    try {
      let query = db.collection('ingredients')
      const conds = []
      if (keyword) {
        const reg = db.RegExp({ regexp: keyword, options: 'i' })
        conds.push(
          db.command.or([
            { name: reg },
            { categoryLabel: db.RegExp({ regexp: keyword, options: 'i' }) }
          ])
        )
      }
      if (category) {
        conds.push({ categoryLabel: category })
      }
      if (conds.length === 1) {
        query = query.where(conds[0])
      } else if (conds.length > 1) {
        query = query.where(db.command.and(conds))
      }
      const countRes = await query.count()
      const listRes = await query
        .skip((safePage - 1) * safePageSize)
        .limit(safePageSize)
        .field({ name: true, categoryLabel: true, safetyLevel: true, function: true })
        .get()

      return {
        code: 0,
        message: 'success',
        data: {
          list: listRes.data,
          total: countRes.total,
          page: safePage,
          pageSize: safePageSize
        }
      }
    } catch (e) {
      console.warn('[searchIngredients] 数据库查询失败，使用兜底数据:', e)
    }

    // 兜底
    const filtered = fallbackIngredients.filter(i => {
      if (category && i.categoryLabel !== category) return false
      if (!keyword) return true
      return (
        i.name.includes(keyword) ||
        (i.alias && i.alias.some(a => a.includes(keyword))) ||
        i.categoryLabel.includes(keyword) ||
        i.function.includes(keyword)
      )
    })
    const start = (safePage - 1) * safePageSize
    const list = filtered
      .slice(start, start + safePageSize)
      .map(i => ({
        name: i.name,
        categoryLabel: i.categoryLabel,
        safetyLevel: i.safetyLevel,
        function: i.function
      }))

    return {
      code: 0,
      message: 'success',
      data: { list, total: filtered.length, page: safePage, pageSize: safePageSize }
    }
  } catch (err) {
    console.error('[searchIngredients] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}
