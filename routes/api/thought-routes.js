const router = require('express').Router();

const {
    //getAllThought,
    getThoughtById,
    addThought,
    updateThoughtById,
    removeThought,
    getAllThoughts
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

module.exports = router;