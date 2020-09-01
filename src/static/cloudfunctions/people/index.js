const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command

async function getPeopleListAll(){
  const res = await db.collection('people').orderBy('isShowup','desc').get();
  return res
}

async function getPeopleListBy(event){
  const res = await db.collection('people').where(_.or([
    { phone: event.phone },
    {name: event.name}
  ])).get();
  return res
}

async function insertPeople(event){
  const res = await db.collection('people').add({
      data: event
  })
  return res
}


exports.main = async (event, context) => {
    console.log(event,context)
    switch(event.action){
      case 'getPeopleListAll' : return getPeopleListAll();
      case 'getPeopleListBy' : return getPeopleListBy();
      case 'insertPeople' : return insertPeople(event);
      default: {
        return
      }
    }
}
