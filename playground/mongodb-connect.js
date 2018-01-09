const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    db.collection('Users').insertOne({
        name: 'Ana',
        age: 21,
        location: 'Germany'
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert the document');
        }

        console.log('Document inserted');
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});