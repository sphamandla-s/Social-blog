const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    image : String,
    post : String,
    date : String,
    comments : Array,
})


const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;