const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.set('view engine','pug');

app.get('/cards' , (req, res) => {
    res.render('card');
} );

app.get('/hello', (req,res) =>{
    res.render('hello');
});


app.listen(3000,() => { 
    console.log('the application is running on localhost:3000!')
});  