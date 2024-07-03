const express = require('express');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine','pug');

const mainRoutes = require('./routes/app');
const cardsRoutes = require('./routes/cards');

app.use('/app',mainRoutes);
app.use('/cards',cardsRoutes);



app.use((req,res,next) => {
    const err =  new Error('not found');
    err.status = 404;
    next(err);
});

app.use((err,req,res,next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error',err);
})

app.listen(3001,() => { 
    console.log('the application is running on localhost:3001!')
});  