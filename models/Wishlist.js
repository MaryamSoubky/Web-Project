const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,ref:'User'
    },
  items: [
    {
    bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  }
]
},

{collection:'Wishlist'

});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;