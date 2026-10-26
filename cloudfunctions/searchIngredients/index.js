const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

const fallbackIngredients = require('./ingredients-data.js')

exports.main = async (event, context) => {
  try {
    const { keyword = '', page = 1, pageSize = 50 } = event

    // 优先查询数据库
    try {
      let query = db.collection('ingredients')
      if (keyword) {
        const reg = db.RegExp({ regexp: keyword, options: 'i' })
        query = query.where(
          db.command.or([
            { name: reg },
            { categoryLabel: db.RegExp({ regexp: keyword, options: 'i' }) }
          ])
        )
      }
      const countRes = await query.count()
      const listRes = await query
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .field({ name: true, categoryLabel: true, safetyLevel: true, function: true })
        .get()

      return {
        code: 0,
        message: 'success',
        data: {
          list: listRes.data,
          total: countRes.total
        }
      }
    } catch (e) {
      console.warn('[searchIngredients] 数据库查询失败，使用兜底数据:', e)
    }

    // 兜底
    const list = fallbackIngredients
      .filter(i => {
        if (!keyword) return true
        return (
          i.name.includes(keyword) ||
          (i.alias && i.alias.some(a => a.includes(keyword))) ||
          i.categoryLabel.includes(keyword) ||
          i.function.includes(keyword)
        )
      })
      .map(i => ({
        name: i.name,
        categoryLabel: i.categoryLabel,
        safetyLevel: i.safetyLevel,
        function: i.function
      }))

    return {
      code: 0,
      message: 'success',
      data: { list, total: list.length }
    }
  } catch (err) {
    console.error('[searchIngredients] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}
