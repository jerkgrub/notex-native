const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note_controller');

// insert routes here

// Auth
router.post('/api/note/new', noteController.newNote);
router.get('/api/note/all', noteController.findAllNote);
router.get('/api/note/:id', noteController.findOneNote);
router.put('/api/note/update/:id', noteController.updateNote);
router.delete('/api/note/delete/:id', noteController.deleteNote);

module.exports = router;