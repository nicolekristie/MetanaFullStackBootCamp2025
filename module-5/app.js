import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import {Blog }from './models/blog.js';

const app = express();

// connect to mongodb
const dbURI='mongodb+srv://nicoleV:t3st1234@cluster0.ynize.mongodb.net/'
mongoose.connect(dbURI)    //pass in second param if you get deprecation warnings { useNewURLParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))     //listen for request only after db connection is complete
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');


//middleware & static files
app.use(express.static('public'))   //files in public folder are accessibles

 //use middleware to parse data into an object that we can use on the request object
 app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));  //3rd party middleware


//mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog ',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    const blog2 = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });


    //save to db  > it will look for the Blogs collection>takes time(asynchronous)
    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })

        blog2.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })

})


app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/single-blog', (req, res) => {
    Blog.findById('67d1db4d37070186fbc0ff83')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });

})

//send a post request when you click submit from web form
//create post handler
app.post('/blogs', (req, res) => {
    console.log(req.body)  ///have to use the above middleware for form data
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err);
    })
   
})

app.get('/blogs/:id', (req, res) => {    //route parameter
    const id = req.params.id;
    console.log(id);
    //retrieve item form database with the id
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });    //Need to create a details view (details.ejs)
        })
        .catch((err)=>{
            console.log(err);
        })
})      


app.delete('/blogs/:id', (req, res)=> {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({ redirect: '/blogs'} )
    })
    .catch((err)=>{
        console.log(err);
    })
})








// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();   //finished inside this middleware>move on to the next handler
// });

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];
    res.render('index', { title: 'Home', blogs });

});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});