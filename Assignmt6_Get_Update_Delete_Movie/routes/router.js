//onsole.log("yaa, I am in router");

const express = require('express');
const movies = require('./../controller/movies.js');

const movieData = require('./../model/movies.json');

const route = express.Router();

route.use('/', (req, res)=>{
    res.send("<h1>Welcome to home page</h1>");
});

route.use('/movie', movies);

module.exports = route;