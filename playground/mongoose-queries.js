const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5877d702145de6e311d864e7';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not fucking valid');
// }

// Todo.find({
//   _id: id
// })
// .then(todos => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// })
// .then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
// .then(todo => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// })
// .catch(e => console.log(e));


User.findById('5866ce515a8f639b0c5567a1')
.then(user => {
  if (!user) {
    return console.log('Sorry, no such user');
  }
  console.log(JSON.stringify(user, undefined, 2));
})
.catch(e => console.log(e));
