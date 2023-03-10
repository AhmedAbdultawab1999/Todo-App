var todoModel=require('../models/todo');

function createTodo(todo){
    console.log("sended todo",todo);
    return todoModel.create(todo);
}

function editTodo(id, obj) {
    return todoModel.updateOne({ _id: id }, obj, {
      returnNewDocument: true,
    });
  }

// function getUserNames(id){

//     return todoModel.findById(id).select('firstName');
// }

function deleteTodoById(id){

    return todoModel.deleteOne({_id:id})
}
function getTodoByID(id){

    return todoModel.findById(id).populate("userId");
}

function getAllTodos(limit=10,skip=0){

    return todoModel.find({ skip: limit, skip: 5 }).populate("userId");
}


module.exports ={createTodo,editTodo,deleteTodoById,getAllTodos}