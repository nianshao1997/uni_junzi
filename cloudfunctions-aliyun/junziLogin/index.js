'use strict';

let collection = uniCloud.database().collection('junziSign')

exports.main = async (event, context) => {
	
  if(event.password == '' || event.username == '')return 0
  
  let rel = await collection.where({
	  username:event.username.toString(),
	  password:event.password.toString()
  }).get()

  if(rel.affectedDocs)return 1
  return 0
};
