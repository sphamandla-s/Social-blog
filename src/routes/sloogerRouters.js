const express = require('express');
const sloggerRouter = express.Router();

sloggerRouter.get('/', (req, res)=>{
    res.render('home')
})


module.exports = sloggerRouter