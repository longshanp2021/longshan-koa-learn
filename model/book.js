const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('books', BookSchema);