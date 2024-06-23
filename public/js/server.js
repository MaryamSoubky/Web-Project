//nodemon server in case you forget lol

const express = require('express');
const mongoose = require('mongoose');
const Book = require('../models/Book Details');

const app = express();

// connect to mongodp

const dbURI = 'mongodb+srv://TarekMoustafa:test12344321@cluster0.mtyhmrn.mongodb.net/Bookly?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)//, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

const path = require('path');

app.use(express.static('../css'));
app.use(express.static('../booksImages'));
app.use(express.static('../bannerImages'));
app.use(express.static('../icon'));

app.get('/add-book',(req,res) => {

const book = new Book({
    bookTitle: 'Diary of a wimpy kid',
    bookCover: 'Book1.jpg',
    bookCategory: 'Comedy',
    bookDescription: 'Diary Of A Wimpy Kid Is A Children Novel Written And Illustrated By Jeff Kinney. It Is The First Book In The Diary Of A Wimpy Kid Series. The Book Is About A Boy Named Greg Heffley And His Attempts To Become Popular In His First Year Of Middle School.',
    bookPrice: '7'
});

book.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });

});

app.set('view engine' , 'ejs');

app.set('views' , path.join(__dirname,'../views'));

app.get('/' , (req,res) => {

    res.render('shopPage');
});

app.get('/cart' , (req,res) => {

    res.render('cart');

});
