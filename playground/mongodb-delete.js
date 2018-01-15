const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Connecting to Database faild');
    }

    // findOneAndDelete()
    db.collection('Users')
        .findOneAndDelete({
            name: 'Ana'
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log('Delete action faild', error);
        });

    // deleteOne()
    // deleteMany()

    console.log('Connected to Database');
});