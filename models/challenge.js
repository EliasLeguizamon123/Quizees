const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//TODO Revisar si el model challenge esta correctamente creado
const challengeSchema = new Schema({
    path: String,
    tags: [String],
    title: {type: 'string', required: true},
    description: String,
    votes: Number,
    answers: Number,
    views: Number
});

module.exports = mongoose.model('challenge', challengeSchema);