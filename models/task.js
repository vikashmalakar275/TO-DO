// adding required library
const mongoose=require('mongoose');
// defining the schema of collection in db
const taskschema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    taskdate:{
        type:Date,
        required:true
    }
});
// naming collection
const Task=mongoose.model('Task',taskschema);

module.exports=Task;