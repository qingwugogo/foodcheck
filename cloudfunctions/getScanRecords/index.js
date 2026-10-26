const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    const wxContext = cloud.getWXContext()
    const openid = wxContext.OPENID
    const { page = 1, pageSize = 10 } = event

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
