const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

exports.main = async (event, context) => {
  try {
    const wxContext = cloud.getWXContext()
    const openid = wxContext.OPENID
    const db = cloud.database()

    // 查询或创建用户记录
    const userCol = db.collection('users')
    const existing = await userCol.where({ _openid: openid }).get()

    let userInfo
    if (existing.data.length > 0) {
      userInfo = existing.data[0]
      // 累计扫描次数由 scanIngredient 更新，此处不重置
    } else {
      // 新用户
      const now = db.serverDate()
      const newRecord = {
        nickname: '食安探索者',
        avatar: '',
        scanCount: 0,
        createTime: now
      }
      const addRes = await userCol.add({ data: newRecord })
      userInfo = { _id: addRes._id, _openid: openid, ...newRecord }
    }

    return {
      code: 0,
      message: 'success',
      data: {
        openid,
        nickname: userInfo.nickname,
        avatar: userInfo.avatar || '',
        scanCount: userInfo.scanCount || 0,
        createTime: userInfo.createTime ? new Date(userInfo.createTime).getTime() : Date.now()
      }
    }
  } catch (err) {
    console.error('[login] error:', err)
    return { code: -1, message: err.message || '服务异常', data: null }
  }
}
