const express = require('express');
const router=express.Router();
var {createTodo,editTodo,deleteTodoById,getAllTodos}=require('../controller/todo');
const { auth } = require('../middlewares/auth')

router.use(auth)
router.post("/",async (req, res, next) => {
    var Todo = req.body;
    try{
    var myTodo=await createTodo(Todo);
    res.status(201).json(myTodo);}
    catch(err){
        res.json({message:err.message});
    }
});

router.patch("/:id",async (req, res, next) =>{
    user_id= req.params.id;
    var obj=req.body;
    try{
        var myUser=await editTodo(user_id,obj);
        res.status(201).json(myUser);}
        catch(err){
            res.json({message:err.message});
        }
});


router.delete("/:id",async (req, res, next) =>{
    user_id= req.params.id;
    try{
        var todo=await deleteTodoById(user_id);
        res.status(201).json(todo);}
        catch(err){
            res.json({message:err.message});
        }
});


router.get("/",async (req, res, next) =>{
    let limit = req.query.limit;
    let skip = req.query.skip;
    try{
        var myTodo=await getAllTodos(limit,skip);
        res.status(201).json(myTodo);}
        catch(err){
            res.json({message:err.message});
        }
});


module.exports = router;
