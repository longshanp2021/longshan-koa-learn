const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
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

});
let Teacher = mongoose.model('teachers', TeacherSchema);

module.exports = Teacher;