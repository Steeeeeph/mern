const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crystalSchema = new Schema({
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

const Crystal = mongoose.model('Crystal', crystalSchema);
module.exports = Crystal;