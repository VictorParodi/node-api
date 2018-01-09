const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todo').insertOne({
    //     text: 'Task number one',
    //     completed: false
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert document', error);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Allison',
        age: 25,
        location: 'colombia'
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert document', error);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});