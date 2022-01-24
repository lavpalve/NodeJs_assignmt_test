
const movieRoute = express.Router();

const movieData = require('./../model/movies.json');
const bodyParser = require("body-parser");

const fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.get('/movies', (req, res)=>{
    res.send(movieData);
    //console.log(movieData);
});

app.get('/movies/:city', (req, res)=>{
    //console.log(req.params.city);
    //console.log(movieData[req.params.city]);
    //console.log(req.body);
    res.send(movieData[req.params.city]);
});

app.post('/movies/', (req, res)=>{
    //console.log(req);
    console.log(req.body);
    console.log(movieData);
    console.log(movieData.movies.length);
    movieData.movies.push(req.body);
    console.log(movieData.movies.length);
    fs.writeFile('./model/movies.json', JSON.stringify(movieData), (err)=>{
        if(err){
            console.log(err);
            throw err;
        }
        console.log("file written succesfully");
    });
});

app.put('/movies/:city/:index', (req, res)=>{
    console.log(req.params.city);
    console.log(req.params.index);
    let data = req.body;
    //console.log(data);
    //console.log(Object.keys(movieData.movies[0])[0]);
    var i = 0, index = 0;
    var cityMovieData = movieData.movies.filter((el)=>{
        //console.log(Object.keys(movieData.movies[i])[0]);
        if(Object.keys(el)[0] == req.params.city){
            //console.log(req.params.city);
            index = i;
            return el;
        }
        i++;
    });
    //console.log(cityMovieData[0][req.params.city][req.params.index]);
    console.log(index);
    //console.log(movieData.movies[index][req.params.city][req.params.index]);
    movieData.movies[index][req.params.city][req.params.index] = data  // req.body
    fs.writeFile('./model/movies.json', JSON.stringify(movieData), (err)=>{
        if(err){
            console.log(err);
            throw err;
        }
        console.log("file written succesfully");
    });
});

app.delete('/movies/delete/:city', (req, res)=>{
    var i = 0, index = 0;
    console.log(req.params.city);
    var cityMovieData = movieData.movies.filter((el)=>{
        //console.log(Object.keys(movieData.movies[i])[0]);
        if(Object.keys(el)[0] == req.params.city){
            //console.log(req.params.city);
            index = i;
            return el;
        }
        i++;
    });
    movieData.movies.splice(index, 1);
    //console.log(movieData.movies);
    fs.writeFile('./model/movies.json', JSON.stringify(movieData), (err)=>{
        if(err){
            console.log(err);
            throw err;
        }
        res.send(`${req.params.city} data remove succesfully`);
    });
});


    



module.exports = movieRoute;