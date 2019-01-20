const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove().then((todo), => {
  
});

Todo.findByIdAndRemove('5c44b4cef3c4fee3f5c78981').then((todo) => {
  console.log(todo);
});
