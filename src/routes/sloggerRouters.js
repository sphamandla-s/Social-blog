const express = require('express');
const sloggerRouter = express.Router();
const Blog = require('../models/blogModel');


sloggerRouter.get('/', async(req, res)=>{
    const posts = await Blog.find({});
    res.render('home', {posts})
})



module.exports = sloggerRouter