import mongoose from 'mongoose';
// const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }],
    selectedFile:{
        type: String,
    },
    likeCount: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

const NoteModel = mongoose.model('NoteModel', noteSchema);
export default { NoteModel };