const mongoose = require("mongoose");
const taskModel = require("../models/TaskModels");


// to create a task POST 

const createTask = async (req,res) =>{
    console.log(req.body);
    const {title,description} = req.body;
    

    try{
        const task = await taskModel.create({title,description});
        res.status(200).json(task);
    }

    catch(err){
        res.status(400).json({err : err.message})
    }
}

//to get all Tasks - GET 

const getTasks =  async (req,res)=>{

    try{
        const task = await taskModel.find({});
        res.status(200).json(task);
    }
    catch(err){
        res.status(400).json({err : err.message})
    }

}

const getSingleTasks = async (req,res) =>{
    
    const {id} = req.params;

    //Validate Mongoose id 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err : "Task not Found.."});
    }

    try{
        const getSingleTask = await taskModel.findById(id);
        res.status(200).json(getSingleTask)
    }
    catch(err){
        res.status(400).json({err : err.message})
    }
}

//To a Update the Task - PATCH

const updateTask = async (req,res) =>{

    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err : "Task not Found..."})
    }

    try{

       const task = await taskModel.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
);

res.status(200).json(task);
    }
    catch(err){
        res.status(400).json({err : err.message});
    }
}

const deletetask = async (req,res) =>{

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err : "Task not Found.."});
    }

    try{
        const task = await taskModel.findByIdAndDelete(id);
        res.status(200).json(task);
    }
    catch(err){
        res.status(400).json({err : err.message});
    }
}


module.exports = {createTask, getTasks, getSingleTasks,updateTask,deletetask};