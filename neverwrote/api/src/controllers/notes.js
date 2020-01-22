const express = require('express');
const _ = require('lodash');
const models = require('../models');

const router = express.Router();

/* *** TODO: Fill in the API endpoints for notes *** */
// Selects only the fields that are allowed to be set by users
function noteFilter(obj) {
  return _.pick(obj, ['title', 'content', 'notebookId']);
}

// Index
router.get('/', (req, res) => {
// Return
const queryOptions = {
  order: [['createdAt', 'DESC']],

};
models.Note.findAll(queryOptions)
  .then(note => res.json(note))
  .catch(err => res.status(500).json({ error: err.message }));
});

// Create
router.post('/', (req, res) => {
  // Create
  models.Note.create(noteFilter(req.body))
    .then(note => res.json(note))
    .catch(err => res.status(422).json({ error: err.message }));
});

// Show
router.get('/:noteId', (req, res) => {
  // Return
  models.Note.findById(req.params.noteId)
    .then(note => res.json(note))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Destroy
router.delete('/:noteId', (req, res) => {
  // Delete
  models.Note.destroy({ where: { id: req.params.noteId } })
    .then(() => res.json({}))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Update
router.put('/:noteId', (req, res) => {
  models.Note.findById(req.params.noteId)
  .then(note => note.update(noteFilter(req.body)))
    .then(note => res.json(note))
    .catch(err => res.status(422).json({ error: err.message }));
});

module.exports = router;
