const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event_controller');

// insert routes here

// 1. Create
router.post('/api/event/new', eventController.newEvent);

// 2. Read
router.get('/api/event/all', eventController.findAllEvent);
router.get('/api/event/:id', eventController.findOneEvent);

// 3. Update
router.put('/api/event/update/:id', eventController.updateEvent);

// 4. Delete
router.delete('/api/event/delete/:id', eventController.deleteEvent); //DELETE

// attendee section below ///////////////////////////////////////////////////////////////////////////////

// create
router.post('/api/event/add/attendee/:id', eventController.addAttendee)

// read 
router.get('/api/event/get/attendee/:id', eventController.getAllAttendees)

// delete
router.delete('/api/event/attendee/:eventId/:email', eventController.deleteAttendee);


module.exports = router;