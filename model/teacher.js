const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    remark: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model('teachers', TeacherSchema);