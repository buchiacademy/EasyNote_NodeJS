module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new Note
    app.post('/notes', notes.create);

    // Retreive all Notes
    app.get('/notes', note.findAll);

    // Retreive a single node with node id
    app.get('/notes/:noteId', notes.findOne);

    // Update a note with note id
    app.put('/notes/:noteId', notes.update);

    // Delete a note with note id
    app.delete('/notes/:noteId', notes.delete);
}