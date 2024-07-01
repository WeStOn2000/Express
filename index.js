const express = require('express');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.use(bodyparser.urlencoded({extended: false}));

app.set('view engine','pug');

app.get('/',(req,res) => {
    const name = req.cookies.username;
    res.render('index',{name});
});

app.post('/goodbye',(req,res) => {
res.clearCookie('username');
res.redirect('/hello')
});

app.get('/hello' , (req, res) => {
    res.render('hello');
} );

app.post('/hello', (req,res) =>{
    res.cookie('username', req.body.username);
    res.redirect('/');
});


app.listen(3001,() => { 
    console.log('the application is running on localhost:3001!')
});  