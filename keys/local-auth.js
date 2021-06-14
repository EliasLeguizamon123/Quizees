const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) =>{
    const user = await user.findById();
    done(null, user)
    
});

passport.use('local-singup', new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password',
    emailField: 'email',
    passReqToCallback: true
}, async (req, userName, email, password, done)=>{
    const user = new user();
    user.userName = userName;
    user.password = password;
    user.email = email;
    await user.save();
    done(null, user);
}));