const mongoose = require('mongoose');

const Note = mongoose.model('note', {
    name: {
        type: String,
        required: true
    }
});

module.exports = Note;