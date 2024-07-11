const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    note_title: String,
    note_content: String,
    tags: [String],
    user_id: String,
    is_favorite: Boolean,
    is_archived: Boolean,
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
