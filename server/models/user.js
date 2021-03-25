import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
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

const User = mongoose.model('User', userSchema);
module.exports = User;