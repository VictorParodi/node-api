const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Connect to Data Base faild');
    }

    // findOneAndDelete()
    db.collection('Todos')
        .findOneAndDelete({
            text: 'Walk the cat'
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log('Delete action faild', error);
        });

    // deleteMany()
    // db.collection('Todo')
    //     .deleteMany({
    //         text: "Walk the dog"
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log('Delete action faild');
    //     });

    // deleteOne()
    // db.collection('Todo')
    //     .deleteOne({
    //         text: 'Walk the dog'
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log('Delecte action faild', error);
    //     });

    console.log('Connected to Data Base');
});