Note = require("../models/note_model");

// 1. Create
const newNote = (req, res) => {
  Note.create(req.body)
    .then((newNote) => {
      res.json({ newNote: newNote, status: "successfully inserted" });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

// 2. Read
const findAllNote = (req, res) => {
    Note.find()
      .then((allDaNote) => {
        res.json({ Notes: allDaNote });
      })
      .catch((err) => {
        res.json({ message: "Something went wrong", error: err });
      });
  };

// FIND BY ID
const findOneNote = (req, res) => {
    Note.findById(req.params.id)
      .then((note) => {
        if (note) {
          res.json({ Note: note });
        } else {
          res.status(404).json({ message: "Note not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Something went wrong", error: err });
      });
  };

// 3. Update
const updateNote = (req, res) => {
  Note.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedNote) => {
      res.json({
        updatedNote: updatedNote,
        status: "successfully Updated the Note",
      });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

// 4. Delete
const deleteNote = (req, res) => {
  Note.findOneAndDelete({ _id: req.params.id })
    .then((deletedNote) => {
      if (deletedNote) {
        res.json({ message: "Note successfully deleted", deletedNote });
      } else {
        res.status(404).json({ message: "Note not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong", error: err });
    });
};

module.exports = {
  newNote,
  findAllNote,
  findOneNote,
  updateNote,
  deleteNote,
  
};
