const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({

    bookTitle: {
        type: String,
        required:true
    },
    bookCover: {
        type: String,
        required:true
    },
    bookCategory:{
        type:String,
        required:true
    },
    bookDescription: {
        type:String,
        required:true
    },
    bookPrice: {
        type: Number,
        required:true,
        min: [0,'Price must be positive'],
        validate: {
            validator: function(value) {
                return value >= 0;
            },
            message: props => `${props.value} is not a valid price!`
        }
    }

},{collection:'Book Details'

});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;