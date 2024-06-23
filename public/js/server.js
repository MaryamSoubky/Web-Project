const express = require('express');

const app = express();

const path = require('path');

app.listen(3000);

app.use(express.static('../css'));
app.use(express.static('../booksImages'));
app.use(express.static('../bannerImages'));
app.use(express.static('../icon'));

app.set('view engine' , 'ejs');

app.set('views' , path.join(__dirname,'../views'));

app.get('/' , (req,res) => {

    res.render('shopPage');
});

app.get('/cart' , (req,res) => {

    res.render('cart');

});
