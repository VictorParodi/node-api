const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to Data Base');
    }

    db.collection('Users')
        .find({
            _id: new ObjectID('5a5423e5a8690d2510c7f65b')
        })
        .toArray()
        .then((docs) => {
            console.log('Users collections:');
            console.log(docs);
        })
        .catch((error) => {
            console.log('Unale to fetch Users collection');
        });

    console.log('Connected to Data Base');
});