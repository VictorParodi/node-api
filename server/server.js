const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// const Todo = mongoose.model('Todo', {
//     text: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     },
//     competedAt: {
//         type: Number
//     }
// });

// const newTodo = new Todo({
//     text: 'Kill the dragon'
// });

// newTodo.save()
//     .then((result) => {
//         console.log('Saved todo', result);
//     })
//     .catch((error) => {
//         console.log('Saved data action failed');
//     });

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        length: 1
    }
});

const newUser = new User({
    email: '          jdoe@mail.com'
});

newUser.save()
    .then((doc) => {
        console.log('Saved document:', doc);
        console.log('');
    })
    .catch((e) => {
        console.log('Inserting action failed');
    });

let server = newUser;


module.exports = { server };