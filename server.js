//nodemon server in case you forget lol

const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/Book Details');
const Cart = require ('./models/Cart');
const Wishlist = require('./models/Wishlist');


const app = express();

// connect to mongodp

const dbURI = 'mongodb+srv://TarekMoustafa:test12344321@cluster0.mtyhmrn.mongodb.net/Bookly?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)//, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

const path = require('path');

app.use(express.static('./css'));
app.use(express.static('./booksImages'));
app.use(express.static('./bannerImages'));
app.use(express.static('./icon'));
app.use(express.urlencoded({ extended: true }));

app.get('/add-book',(req,res) => {

const book = new Book({
    bookTitle: 'Harry potter and the deathly hallows',
    bookCover: 'Book5.jpeg',
    bookCategory: 'Fantasy',
    bookDescription: 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.',
    bookPrice: '10'
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

app.set('views' , path.join(__dirname,'./views'));

app.get('/' ,(req,res)=> {

    res.redirect('/shopPage')

});

app.get('/shopPage' ,(req,res)=> {

    Book.find()
 .then((result) => {
    res.render('shopPage',{ books: result })
 })
 .catch((err) => {
    console.log(err);
 })

});

app.get('/bookDetails/:id',(req,res) =>{
    const id = req.params.id;
    Book.findById(id)
     .then(result => {
        if(!result){
            return res.status(404).send('Book not found');
        }
        res.render('bookDetails',{ book: result });
     })
     .catch(err => {
        console.error(err);
        res.status(500).send('Server Error');
     });
});

app.post('/cart', (req, res) => {
    const { userId, bookId } = req.body;
  
    Cart.findOne({ userId })
      .then(cart => {
        if (cart) {
          const itemIndex = cart.items.findIndex(item => item.bookId.equals(bookId));
          
          if (itemIndex > -1) {
            cart.items[itemIndex].quantity += 1;
          } else {
            cart.items.push({ bookId, quantity: 1 });
          }
          return cart.save();
        } else {
          const newCart = new Cart({
            userId,
            items: [{ bookId, quantity: 1 }]
          });
          return newCart.save();
        }
      })
      .then(() => res.redirect('/shopPage'))
      .catch(err => {
        console.error(err);
        res.status(500).send('Server Error');
      });
  });

  app.get('/cart', (req, res) => {
    const userId = '6679bdafae31fc98ac456aee'; // Replace with actual userId from session or auth
  
    Cart.findOne({ userId })
      .populate('items.bookId')
      .then(cart => {
        res.render('cart', { cart });
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Server Error');
      });
  });

  app.post('/wishlist', (req, res) => {
    const { userId, bookId } = req.body;
  
    Wishlist.findOne({ userId })
      .then(wishlist => {
        if (wishlist) {
          const exists = wishlist.items.some(item => item.bookId.equals(bookId));
          if (!exists) {
            wishlist.items.push({ bookId });
            return wishlist.save();
          }
          return wishlist;
        } else {
          const newWishlist = new Wishlist({
            userId,
            items: [{ bookId }],
          });
          return newWishlist.save();
        }
      })
      .then(() => res.redirect('/shopPage'))
      .catch(err => {
        console.error(err);
        res.status(500).send('Server Error');
      });
  });

  app.get('/wishlist' ,(req,res)=> {

    const userId = '6679bdafae31fc98ac456aee'; // Replace with actual userId from session or auth
  
    Wishlist.findOne({ userId })
      .populate('items.bookId')
      .then(wishlist => {
        res.render('wishlist', { wishlist });
      })
      .catch(err => {
        console.error(err);
        res.status(500).send('Server Error');
      });

});