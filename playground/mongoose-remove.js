const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// Todo.remove({})
//   .then(result => {
//     console.log(result);
//   });

//Todo.findOneAndRemove()

Todo.findByIdAndRemove('587d3686ea0cfea68daa67f5')
  .then(todo => {
    console.log(todo);
  });
