const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

const User = mongoose.model('User', {
  name: {
    type: String
  },

  age: {
    type: Number
  }
});

const newUser = new User({
  name: 'Allison',
  age: 25
});

newUser.save()
  .then((doc) => {
    console.log('Saved doc:', doc);
  })
  .catch((e) => {
    console.log('Inserting action failed');
  });