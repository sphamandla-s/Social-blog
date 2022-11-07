const express = require('express');
const path = require("path");
const mongoose = require('mongoose');
const app = express();
const port = 5003;


mongoose.connect('mongodb://localhost:27017/blog').then(()=> {
    console.log("Connected")
}).catch(err => {
    console.log("There was an error")
    console.log(err)
});


app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname,'src/views'));
app.set("view engine", "ejs");


//Routers
const sloggerRouter = require(path.join(__dirname, 'src/routes/sloggerRouters.js'));
app.get('/', sloggerRouter);




app.listen(port, ()=>{console.log(`Listening to port ${port}`)})