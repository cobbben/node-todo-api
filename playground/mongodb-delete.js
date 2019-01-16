// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to Db');
  };
  console.log('Connected to MongoDB server');

  // deleteMany method
  //
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result)
  // });

  // // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });
  // findOneandDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection('Users').deleteMany({name: 'Ben'}).then((result) => {
  //   console.log('Many Deleted: ' + result);
  // });

  db.collection('Users').findOneAndDelete({_id:new ObjectID('5c3d36dccc26f9157e1e84b7')}).then((result) => {
    console.log(result)
  });


  //db.close();

});
