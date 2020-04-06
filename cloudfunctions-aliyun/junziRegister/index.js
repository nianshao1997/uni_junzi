'use strict';

const collection = uniCloud.database().collection('junziSign')

exports.main = async (event, context) => {
  
  let rel = await collection.where({
	  username:event.username
  }).get()
  
  if(!rel.affectedDocs){
	  let register = await collection.add(event)
	  console.log(register)
	  if(register.id)return 1
	  return 0
  }else{
	  return -1
  }
  
};

