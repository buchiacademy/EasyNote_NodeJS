// import mongoose
const mongoose = require('mongoose');

// Schema
const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
}, {
        timestamps: true,
    });

module.exports = mongoose.model('Note', NoteSchema);