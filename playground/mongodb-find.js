const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect MongoDB server');
    }

    db.collection('Todo').find({
        _id: new ObjectID("5a5431639abadc838e1e28fe")
    }).toArray()
    .then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
        console.log('Unable to fetch todos');
    });

    console.log('Connected to MongoDB serve');
});