const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chrystalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    },
    chakra: {
        type: String,
        required: true
    },
    astrology: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Chrystal = mongoose.model('Chrystal', chrystalSchema);
module.exports = Chrystal;