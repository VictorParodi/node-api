const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    competedAt: {
        type: Number
    }
});

const newTodo = new Todo({
    text: 'Kill the dragon'
});

newTodo.save()
    .then((result) => {
        console.log('Saved todo', result);
    })
    .catch((error) => {
        console.log('Saved data action failed');
    });