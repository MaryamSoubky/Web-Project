const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cartSchema = new Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,ref:'User'
    },
    items: [
        {
            bookId:{ type: mongoose.Schema.Types.ObjectId, ref:'Book' },
            quantity:{ type: Number, default: 1 }
        }
]

},{collection:'Cart'

});

const Cart = mongoose.model('Cart',cartSchema);

module.exports = Cart;