const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcypt = require('bcrypt-nodejs')

//TODO Revisar si el model user esta correctamente creado
const userSchema = new Schema({
    name: String,
    userName: {type: 'string', required: true},
    password: {type: 'string', required: true},
    creationDate: Date,
    about: String,
    picture: String,
    email: {type: 'string', required: true},
    puntuation: Number,
    isEnabledToScore: Boolean
});

userSchema.method.encryptPassword = (password) => {
    return bcypt.hashSync(password, bcypt.genSaltSync(10));
}
userSchema.method.comparePassword = function(password){
    return bcypt.compareSync(password, this.password);
}
module.exports = mongoose.model('user', userSchema);