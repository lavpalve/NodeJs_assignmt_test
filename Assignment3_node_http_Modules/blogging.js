const blogs = {
   1:{
    title: 'NodeJs Tutorial',
    content: 'abcdef'
   },
   2:{
       title: 'NodeJS Advance Tutorial',
       content: 'uvwxyz'
   }
}
const getAllBlogs =  ()=>{
    return blogs;
}

module.exports = getAllBlogs();