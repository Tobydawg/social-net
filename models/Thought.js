const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is Required'
  },

  thought: {
    type: String,
    trim: true,
    required: 'Password is Required',
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