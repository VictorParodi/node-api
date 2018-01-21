const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unabled to connect to Database server');
    }

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID("5a64ee04185ac31edcef9451")
        }, {
            $set: {
                age: 22
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log('Updating faild', err);
        });

    console.log('Database server connected');
});