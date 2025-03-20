import express from 'express';
const router = express.Router();


import Blogs from '../models/blogs.js'

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
router.get('/:id', getBlog, (req,res) => {
    res.json(res.blogs);
})

//create one
router.post('/', getBlog, async (req,res) => {
    const blog = new Blogs({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,   //masked
    })
    try {
        const newBlog = await blog.save()
        res.status(201).json(newBlog)
    } catch (err) {
        res.status(400).json({message: err.message})
    }

})

//update one
router.patch('/:id', getBlog, async (req, res) => {
if (req.body.name != null) {
    res.blog.name = req.body.name
}
if (req.body.email != null) {
    res.blog.email = req.body.email
}
    try {
        const updatedBlog = await res.blog.save()
        res.json(updatedBlog)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})


// deleting one
router.delete('/:id', getBlog, async (req, res) => {
    try {
        await res.blog.remove();
        res.json({message: "Deleted Blog"});
    } catch (err) {
        res.status(500).json({message: err.message })
    }
})

//create middleware so we don't reuse id
async function getBlog(req, res, next) {
    let blog
    try{
        blog = await blog.findById(req.params.id)
        if (blog == null) {
            return res.status(404).json({message: 'cannot find blog'})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.blog = blog
    next()   //allows you to move on to the next set of middleware
}


export default router
