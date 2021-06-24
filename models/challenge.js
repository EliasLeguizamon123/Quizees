const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const challenge = require('./user');
//TODO Revisar si el model challenge esta correctamente creado
const challengeSchema = new Schema({
    path: {type: String, required: true, unique: true},
    tags: {type: Array, required: true, default: []},
    title: {type: String, required: true, unique: false},
    description: {type: String, required: false, unique: true},
    difficulty:{type: String, required: true, unique: true},
    author:{type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    views: Number,
    likes: Number,
    disLikes: Number,
    //TODO hace falta crear un MODEL para commentarios ? 
    comments: {type: Array, default: []}
});

module.exports = mongoose.model('challenge', challengeSchema);