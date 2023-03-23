// including axpress
const express=require('express');

// using express router
const router=express.Router();
// const for using controller to assign routes
const hc=require('../controllers/home_controller');
router.get('/',hc.base);
// route for create task
router.post('/create-task',hc.create);

// route for deleteing task

router.post('/delete-task',hc.delet);
// exporting the router for use in index.js
module.exports=router;