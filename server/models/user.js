import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new.Schema({
    username: {
        type: String,
        required: true,
        unique: true
      },
      passwordHash: {
        type: String,
        required: true
      },
      numFavorites: {
        type: Number
      }
});
module.exports = mongoose('User', userSchema);