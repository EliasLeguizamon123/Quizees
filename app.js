const express = require('express');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const session = require('express-session');

require('dotenv').config({ path: './.env' })
const app = express();



//*Settings
app.set('port', process.env.PORT || 8080);
require('./database/database.js')
require('./keys/local-auth.js')

app.listen(process.env.PORT, (req, res)=>{
    console.log(`App listen on port ${process.env.PORT}`);
})

//*Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//*Routers
const challengesRouter = require('./routes/challenges')
const singInRouter = require('./routes/singIn');
const singUpRouter = require('./routes/singUp');

app.use(require('./routes/index.js'));
app.use('/singIn', singInRouter)
app.use('/singUp', singUpRouter);
app.use('/challenges', challengesRouter);

//*404 Handle
app.use((req, res, next)=>{
    //TODO Modificar .send por .render para la visual con ReactJS
    res.status(404).send('404 Page not found')
    next()
});

