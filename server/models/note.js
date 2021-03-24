import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const noteSchema = new.Schema({
    title: String,
    body: Object,
    author: String,
});
module.exports = mongoose('note', noteSchema);