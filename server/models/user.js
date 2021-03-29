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

const userModel = mongoose.model('User', userSchema);
export { userModel }