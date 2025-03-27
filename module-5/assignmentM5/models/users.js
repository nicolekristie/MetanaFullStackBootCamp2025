import mongoose, { Collection } from 'mongoose';


const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
}, {collection: 'User_collection'});

export default mongoose.model('Users', userSchema);