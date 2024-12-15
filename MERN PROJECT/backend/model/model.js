const mongoose = require('mongoose');

const taskscheme = new mongoose.schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
});

module.exports = mongoose.model('task',taskschema);


