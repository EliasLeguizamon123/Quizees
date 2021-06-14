const express = require('express');
const router = express.Router();
const passport = require('passport');
router.get('/', (req, res)=>{
    res.send('Hola sing up');
});

router.post('/', passport.authenticate('local-singup', {
    successRedirect: '/singIn',
    failureRedirect: '/',
    passReqToCallback: true
}));

module.exports = router;