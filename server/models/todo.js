const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
  text: {
    required: true,
    trim: true,
    type: String
  },

  competed: {
    type: Boolean,
    default: false
  },

  completedAt: {
    type: Number
  }
});

module.exports = {Todo};