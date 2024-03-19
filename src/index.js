const express = require("express");
const mongoose = require("mongoose");
const collection = require("./config");

const PORT = 5000;
const app = express();
// to support URL-encoded bodies
app.use(express.urlencoded({extended: true}));

// app.use(express.json());

// setup view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

// -----------------------Render the URL-----------------------
app.get('/', (req, res)=>{
    res.render("index")
})

app.get('/about', (req, res)=>{
    res.render("about")
})

// ------------------send the data to database------------------
app.post('/', async(req, res)=>{
    const data = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        phone : req.body.phone,
        message : req.body.message
    }

    // check for duplicate user using (email)
    const existingEmail = await collection.findOne({email : data.email});

    if (existingEmail) {
        console.log("Email already exists!");
        res.send("Email exist");
    } else {
        const userdata = await collection.insertMany(data);
        console.log(userdata);
        res.send("Thank you registration");
    }
})


app.listen(PORT, ()=>{
    console.log("Server is listening at port ", PORT);
})