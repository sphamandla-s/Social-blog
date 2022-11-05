const express = require('express');
const path = require("path");
const app = express();
const port = 5003;


app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname,'src/views'));
app.set("view engine", "ejs");


//Routers
const sloggerRouter = require(path.join(__dirname, 'src/routes/sloogerRouters.js'));
app.get('/', sloggerRouter);


app.listen(port, ()=>{console.log(`Listening to port ${port}`)})