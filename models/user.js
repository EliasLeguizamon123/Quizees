const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcypt = require('bcrypt-nodejs')
const challenge = require('./challenge');

//TODO Revisar si el model user esta correctamente creado
const userSchema = new Schema({
    name: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    creationDate: {type: Date, required: true, default: Date.now},
    bio: {type: String},
    avatar: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    puntuation: Number,
    isEnabledToScore: {type: Boolean, required: true, default: false},
    socialMedia: {type: Array, required: false, default: []},
    challenges: [{type: mongoose.Schema.Types.ObjectId, ref: 'challenge'}],
    solutions: [{type: mongoose.Schema.Types.ObjectId, ref: 'challenge'}],
    location: {type: String}
});

userSchema.method.encryptPassword = (password) => {
    return bcypt.hashSync(password, bcypt.genSaltSync(10));
}
userSchema.method.comparePassword = function(password){
    return bcypt.compareSync(password, this.password);
}
module.exports = mongoose.model('user', userSchema);