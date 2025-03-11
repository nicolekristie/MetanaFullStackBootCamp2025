const express = require('express');

//express app
const app = express();

//register view engine and use ejs to create templates
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);


app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })

})
