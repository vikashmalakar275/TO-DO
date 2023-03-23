// including table config
const Task=require('../models/task');
// controler for rendering the starting page home page
module.exports.base=function(req,res){
    Task.find({},function(err,alltask){
        if(err){
            console.log("error aagaya!!");
            return;
        }
        return res.render('home',{
            title:"todo list",
            tasks:alltask});
    
})
}
// controller for craeting a new task
module.exports.create=function(req,res){
    Task.create(req.body,function(err,newtask){
        if(err){
            console.log("error aya hai!!",err);
            return;
        }
        console.log("task aa gaya!!!!!",newtask);
        return res.redirect('back');
    });
}
// controller for deleting the task
module.exports.delet=function(req,res){
    var info=req.body;
    // looping over all task selected to be deleted
    for(let i in info){
        Task.findByIdAndDelete(i,function(err){
            if(err){
                console.log("error in deleting!!");
                return;
            }
        });
    }
    return res.redirect('back');
}