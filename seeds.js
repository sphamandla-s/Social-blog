const mongoose = require('mongoose');
const path = require("path");
const Blog = require(path.join(__dirname, 'src/models/blogModel'));





mongoose.connect('mongodb://localhost:27017/blog').then(()=> {
    console.log("Connected")
}).catch(err => {
    console.log("There was an error")
    console.log(err)
});


const t = new Blog({title: 'lorem', image : "/images/3817a48c-85d2-418e-ac7e-812112c3d58a.webp", post: ' ipsa! Est magni iusto amet doloremque dicta recusandae nulla et illo.', date : "20/10/2022", comments : ['ffeg', 'egege','egegege']})
t.save().then(t => {
    console.log("Add")
    console.log(t)
}).catch(e => {
    console.log("There is an Error")
    console.log(e)
})

