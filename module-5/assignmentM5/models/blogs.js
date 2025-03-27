import mongoose from 'mongoose';


const blogSchema =  new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
}, {collection: 'Blog_collection'})

//model allows us to interact directly with the database using this schema
export default mongoose.model('Blogs', blogSchema);
