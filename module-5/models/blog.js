import mongoose from 'mongoose';
export const Schema = mongoose.Schema;   


//define the structure of the document
export const blogSchema = new Schema({
    //add properties
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true});

//Model provides an interface where you can communicate with a db collection for the document type

export const Blog = mongoose.model('Blog', blogSchema);
// module.exports = Blog;