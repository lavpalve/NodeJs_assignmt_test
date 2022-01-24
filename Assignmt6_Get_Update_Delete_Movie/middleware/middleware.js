
module.exports = app.get('/', (req, res, next)=>{
    console.log("I am in middleware");
    next();
});