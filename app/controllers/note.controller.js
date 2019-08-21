// import note model
const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.Create = (req, res) => {
    // Vaidate request
    if (!req.body.content) {
        return res.status(400).send({
            message: 'Note can not be emoty',
        });
    }

    // Create a Note
    const note = new Note({
        title: req.body.title || 'Untitled Note',
        content: req.body.content
    });

    // Save note in database
    note.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while create new note',
            });
        });
};

// Retreiving and retrun all notes from the database
exports.findAll = (req, res) => {
    Note.find()
        .then(notes => {
            res.send(notes);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occourred while retreiving notes.'
            });
        });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Note.findById(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: 'Note not found with id' + req.params.noteId,
                });
            }
            res.send(note);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.noteId
            });
        });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // code goes here
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    // code goes here
};