// required library
const mongoose=require('mongoose');
// ?connecting to datbase
mongoose.connect('mongodb://localhost/tododb');
// checking connection
const db=mongoose.connection;

db.on('error',console.error.bind(console,'error agaya'));

db.once('open',function(){
    console.log("mubarak ho!!!!!");
});