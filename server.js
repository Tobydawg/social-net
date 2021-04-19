const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const { User, Thought } = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-net', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

app.post('/submit', ({ body }, res) => {
    const user = new User(body);





db.User.create(user)
  .then(dbUser => {
    console.log(dbUser);
  })
  .catch(({ message }) => {
    console.log(message);
  });
});








// Retrieve all thoughts
app.get('/thoughts', (req, res) => {
  db.Thought.find({})
    .then(dbThought => {
      res.json(dbThought);
    })
    .catch(err => {
      res.json(err);
    });
});









// Retrieve all users
app.get('/users', (req, res) => {
  db.User.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});






// Create a new thought and associate it with user
app.post('/submit', ({ body }, res) => {
  db.Thought.create(body)
    .then(({ _id }) =>
      db.User.findOneAndUpdate({}, { $push: { thoughts: _id } }, { new: true })
    )
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});






app.get('/populate', (req, res) => {
  // Write the query to `find()` all of the users from the User collection
  db.Thought.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  
  
});






app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
