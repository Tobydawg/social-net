const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
// Use this to log mongo queries being executed!
mongoose.set('debug', true);

// A user has been created already for our activity purposes
db.User.create({ name: 'Ernest Hemingway' })
  .then(dbUser => {
    console.log(dbUser);
  })
  .catch(({ message }) => {
    console.log(message);
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

// Create a new note and associate it with user
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
  
  // and `populate()` them with any associated notes.
  // YOUR CODE HERE
  //
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-net', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});




app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
