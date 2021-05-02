const { Schema, model } = require('mongoose');
//const //thoughtController = require('../controllers/thought-controller');

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);



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

  thoughtText: {
    type: String,
    trim: true,
    required: true,
    minlength: 6
  },

  // reaction: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
    
  // }],

  createdAt: {
    type: Date,
    default: Date.now
  }
});



ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
