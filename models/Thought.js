const { Schema, model } = require('mongoose');
//const //thoughtController = require('../controllers/thought-controller');

const ThoughtSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },

  username: {
    type: String,
    required:true,
    trim: true
    
  },

  thought: {
    type: String,
    trim: true,
    required: true,
    minlength: 6
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;

// const { Schema, model } = require('mongoose');

// const NoteSchema = new Schema({
//   title: String,
//   body: String
// });

// const Note = model('Note', NoteSchema);

// module.exports = Note;