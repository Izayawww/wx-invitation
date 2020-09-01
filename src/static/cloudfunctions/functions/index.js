const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
exports.main = async (event, context) => {
  const peoples = await db.collection('people').get()
  const musics = await db.collection('musics').get()
  return ({
    peoples,
    musics
  })
}
