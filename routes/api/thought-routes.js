const router = require('express').Router();

const {
    
    getThoughtById,
    addThought,
    updateThoughtById,
    removeThought,
    getAllThoughts,
    addReply,
    removeReplyById,

  } = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thought
router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);

// Set up GET one, PUT, and DELETE at /api/thought/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(removeThought);

  router
  .route('/reaction/:thoughtId')
  .post(addReply)
  .delete(removeReplyById);

  

module.exports = router;

//POST api/thoughts/:thoughtId/reactions