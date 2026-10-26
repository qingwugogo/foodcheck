const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    const wxContext = cloud.getWXContext()
    const openid = wxContext.OPENID
    const { recordId } = event

    if (!recordId) {
      return { code: -1, message: '缺少参数 recordId', data: null }
    }

    const res = await db.collection('scan_records')
      .where({ _id: recordId, _openid: openid })
      .limit(1)
      .get()

    if (res.data.length === 0) {
      return { code: 0, message: 'success', data: null }
    }

    const item = res.data[0]
    return {
      code: 0,
      message: 'success',
      data: {
        recordId: item._id,
        foodName: item.foodName,
        ingredientText: item.ingredientText || '',
        ingredients: item.ingredients || [],
        safetyLevel: item.safetyLevel,
        riskCount: item.riskCount || 0,
        summary: item.summary || '',
        riskTips: item.riskTips,
        imagePath: item.imageFileId || '',
        createTime: item.createTime ? new Date(item.createTime).getTime() : Date.now()
      }
    }
  } catch (err) {
    console.error('[getScanRecordDetail] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}
