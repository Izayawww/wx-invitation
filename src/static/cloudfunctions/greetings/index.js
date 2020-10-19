const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command

async function getGreetings(){
  const res = await db.collection('greetings').orderBy('_id','desc').get();
  return res
}

async function getPeopleListBy(event){
  const res = await db.collection('people').where(_.or([
    { phone: event.phone },
    {name: event.name}
  ])).get();
  return res
}

async function insertGreeting(event){
  const res = await db.collection('greetings').add({
      data: event
  })
  return res
}


exports.main = async (event, context) => {
    console.log(event,context)
    switch(event.action){
      case 'getGreetings' : return getGreetings();
      case 'getPeopleListBy' : return getPeopleListBy();
      case 'insertGreeting' : return insertGreeting(event);
      default: {
        return
      }
    }
}
