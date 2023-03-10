const express = require('express');
const router=express.Router();
var {createUser,getUserNames,deleteUser,editUser,login,getUserTodos}=require('../controller/user');

router.post("/",async (req, res, next) => {
    var user = req.body;
    try{
    var myUser=await createUser(user);
    res.status(201).json(myUser);}
    catch(err){
        res.json({message:err.message});
    }
})

router.get("/:id",async (req, res, next) =>{
    user_id= req.params.id;
    try{
        var myUser=await getUserNames(user_id);
        res.status(201).json(myUser);}
        catch(err){
            res.json({message:err.message});
        }
});
router.delete("/:id",async (req, res, next) =>{
    user_id= req.params.id;
    try{
        var myUser=await deleteUser(user_id);
        res.status(201).json(myUser);}
        catch(err){
            res.json({message:err.message});
        }
});

router.patch("/:id",async (req, res, next) =>{
    user_id= req.params.id;
    var obj=req.body;
    try{
        var myUser=await editUser(user_id,obj);
        res.status(201).json(myUser);}
        catch(err){
            res.json({message:err.message});
        }
});

// Get user Todos

router.get("/:id/todos",async (req, res, next) =>{
    user_id= req.params.id;
    try{
        var myUser=await getUserTodos(user_id);
        res.status(201).json(myUser);}
        catch(err){
            res.json({message:err.message});
        }
});

router.post("/login",login);

module.exports = router;