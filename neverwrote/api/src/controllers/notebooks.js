const express = require('express');
const _ = require('lodash');
const models = require('../models');

const router = express.Router();

/* *** TODO: Fill in the API endpoints for notebooks *** */
function notebookFilter(obj) {
  return _.pick(obj, ['title']);
}

// Index
router.get('/', (req, res) => {
// returns notbooks
const queryOptions = {
  order: [['createdAt', 'DESC']],

};
models.Notebook.findAll(queryOptions)
  .then(notebook => res.json(notebook))
  .catch(err => res.status(500).json({ error: err.message }));
});

router.get('/:notebookId/notes', (req, res) => {
// returns all notes for notebooks
const queryOptions = {
  where: { notebookId: req.params.notebookId }


};
models.Note.findAll(queryOptions)
  .then(notebook => res.json(notebook))
  .catch(err => res.status(500).json({ error: err.message }));
});


 // Create
 router.post('/', (req, res) => {
   // Create
  models.Notebook.create(notebookFilter(req.body))
     .then(notebook => res.json(notebook))
     .catch(err => res.status(422).json({ error: err.message }));
 });

 // Show
 router.get('/:notebookId', (req, res) => {
   // Return
   models.Notebook.findById(req.params.notebookId)
     .then(notebook => res.json(notebook))
     .catch(err => res.status(500).json({ error: err.message }));
 });

 // Destroy
 router.delete('/:notebookId', (req, res) => {
   // Delete
   models.Notebook.destroy({ where: { id: req.params.notebookId } })
     .then(() => res.json({}))
     .catch(err => res.status(500).json({ error: err.message }));
 });

 // Update
 router.put('/:notebookId', (req, res) => {
   models.Notebook.findById(req.params.notebookId)
   .then(notebook => notebook.update(notebookFilter(req.body)))
     .then(notebook => res.json(notebook))
     .catch(err => res.status(422).json({ error: err.message }));
 });
module.exports = router;
