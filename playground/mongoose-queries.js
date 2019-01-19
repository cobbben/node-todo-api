const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '5c435da89714e81dadc29b79';

// var id = '5c43a5307556401f77afceda11';

// if(!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e))

//user.findById


User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User: ', JSON.stringify(user, undefined,2));
}, (e) => {
  console.log(e)
});
