const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //
  // db.collection('Todos')
  //   .deleteMany({text: 'Eat Lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   });
  // db.collection('Todos')
  //   .deleteOne({text: 'Eat Lunch'})
  //   .then((res) => {
  //     console.log(res);
  //   });

  // db.collection('Todos')
  //   .findOneAndDelete({completed: false})
  //   .then(res => {
  //     console.log(res);
  //   });

  // db.collection('Users')
  //   .deleteMany({name: 'Elias'})
  //   .then(res => {
  //     console.log(res);
  //   });

  db.collection('Users')
    .findOneAndDelete({
      _id: new ObjectID('585895df2145df050ccf7acc')
    })
    .then(res => {
      console.log(JSON.stringify(res));
    });
});
