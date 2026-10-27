const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    const wxContext = cloud.getWXContext()
    const openid = wxContext.OPENID
    const { page = 1, pageSize = 10 } = event

    // 扫描记录按用户隔离：取不到 openid 时直接返回空，避免返回全库数据
    if (!openid) {
      console.warn('[getScanRecords] 未获取到 openid，返回空列表')
      return { code: 0, message: 'success', data: { list: [], total: 0 } }
    }

    const query = db.collection('scan_records').where({ _openid: openid })
    const countRes = await query.count()
    const listRes = await query
      .orderBy('createTime', 'desc')
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .field({
        foodName: true,
        imageFileId: true,
        safetyLevel: true,
        ingredientCount: true,
        riskCount: true,
        createTime: true
      })
      .get()

    const list = listRes.data.map(item => ({
      recordId: item._id,
      foodName: item.foodName,
      thumbnail: item.imageFileId || '',
      safetyLevel: item.safetyLevel,
      ingredientCount: item.ingredientCount || 0,
      riskCount: item.riskCount || 0,
      createTime: item.createTime ? new Date(item.createTime).getTime() : Date.now()
    }))

    return {
      code: 0,
      message: 'success',
      data: { list, total: countRes.total }
    }
  } catch (err) {
    console.error('[getScanRecords] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}
