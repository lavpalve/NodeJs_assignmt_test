const express = require('express');
const app = express();

const fs = require('fs');
const bodyPaser = require('body-parser');

app.use(bodyPaser.urlencoded({extended: true}));
app.use(express.json());

const blogs = require('./model/blogs.json');
const { listenerCount } = require('process');

// get all blogs
app.get('/blogs',(req, res)=>{
    res.send(blogs);
});

// get blog using id
app.get('/blogs/:id', (req, res)=>{
    blogs.blogs.filter((ele)=>{
        if(ele.id == req.params.id){
            res.send(ele);
        }
    });
});

// Edit blog title
app.put('/blogs/:id', async(req, res)=>{
    const editBlogs = blogs.blogs.filter((ele)=>{
         if(ele.id == req.params.id){
            delete blogs.blogs.indexOf(ele);
            ele.title = req.body.title;
            blogs.blogs.push(ele);
        }
    }); 
    fs.writeFile('./model/blogs.json', JSON.stringify(blogs), (err)=>{
        if(err){
            throw err;
        }
    });
});

// Delete blog of given id
app.delete('/blogs/delete/:id', (req, res)=>{
    let index;
    blogs.blogs.filter((ele)=>{
        if(ele.id == req.params.id){
            console.log(blogs.blogs.indexOf(ele));
        }
    });
    fs.writeFile('./model/blogs.json', JSON.stringify(blogs), (err)=>{
        if(err){
            throw err;
        }
    });
});

//console.log(blogs);


app.listen(3001, (err)=>{
    if(err){
        console.log(err);
        throw err;
    }
    console.log("The Server listen through port 3001");
});