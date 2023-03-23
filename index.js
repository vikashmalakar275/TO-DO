// including axpress and using
const express=require('express');
const app=express();
const port=8002;
// including mongo db client
const db=require('./config/mongoose')
// url encoder for body parsing ie req.body
app.use(express.urlencoded({extended:true}));
// static folder including for css and js files
app.use(express.static('static'));

// use express router
app.use('/',require("./routes/index"));
// setting veiw engine as ejs
app.set('view engine','ejs');
// setting view directpry
app.set('views','./views');


// making the app to listen and run and handling errors
app.listen(port,function(err){
    if(err){
        console.log(`Error in running server: ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});