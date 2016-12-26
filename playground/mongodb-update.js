const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos')
    .findOneAndUpdate({
      _id: new ObjectID('586175e2f92d9113309436a4')
    }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    })
    .then(res => {
      console.log(res);
    });

  db.collection('Users')
    .findOneAndUpdate({
      _id: new ObjectID('5855ba375bd72011a19f7c50')
    }, {
      $set: {
        name: 'Kent'
      },
      $inc: {
        age: -1
      }
    }, {
      returnOriginal: false
    })
    .then(res => {
      console.log(res);
    });
});
