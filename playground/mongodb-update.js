// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to Db');
  };
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('5c3e7a198ece76cf9704f9a4')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) =>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c3d36432546f8157b6cb0da')
  },
  {
    $set: {name: 'Benny Bobo'},
    $inc: {age: 55}
  },
  {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })


  //db.close();

});
