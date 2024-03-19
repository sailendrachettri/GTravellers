const express = require("express");
const mongoose = require("mongoose");

const PORT = 5000;
const app = express();

// setup view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

// render the homepage
app.get('/', (req, res)=>{
    res.render("index")
})

app.get('/about', (req, res)=>{
    res.render("about")
})

app.listen(PORT, ()=>{
    console.log("Server is listening at port ", PORT);
})