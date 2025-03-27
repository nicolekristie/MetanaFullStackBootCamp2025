import express from 'express';
const router = express.Router();


import Blogs from '../models/blogs.js'
const app = express();

const blogMiddleware = getBlog(Blogs);

// router.get()
//Create routes
//Getting all
router.get('/', async (req, res) => {
        try{
        const blogs = await Blogs.find()
        res.json(blogs)
    } catch (err) { 
        res.status(500).json({message: err.message } )
    }
})


//Getting one
router.get('/:id', async (req,res) => {
    try {
            const blog = await Blogs.findById(req.params.id)
            res.json(blog);
        } catch (err) {
            res.json({ message: "Blog not found" });
        }   
});





//create one
router.post('/', async (req,res) => {
    const blog= new Blogs({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    })
    try {
        const newBlog = await blog.save()
        res.status(201).json(newBlog)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})


//update one
router.patch('/:id', async (req, res) => {
    try {
        const blogId = req.params.id;
        const updatedBlog  = await Blogs.findOneAndUpdate({_id: blogId}, req.body, {new: true});
        res.json(updatedBlog)
    } catch (err) {
        res.status(400).json({message: "Id not found"})
    }
})


// deleting one
router.delete('/:id', async (req, res) => {
    try {
        const removedblog = await Blogs.deleteOne({_id: req.params.id})
        res.json({message: "Deleted Blog"});
    } catch (err) {
        res.status(500).json({message: err.message })
    }
})

//create middleware to get blog by id
async function getBlog(req, res, next) {
    let blog
    try{
        blog = await blog.findById(req.params.id)
        if (blog == null) {
            return res.status(404).json({message: 'cannot find blog'})
        }

        req.blog = blog;
    } catch (error) {
        // return res.status(500).json({message: err.message})
        return error.message
    }
    next()   //allows you to move on to the next set of middleware
}


export default router
