import TaskModel from "../Model/TaskModel";
import UserModel from "../Model/UserModel";
import {Request,Response} from "express"
import mongoose from "mongoose";



// Function to get the Task 
const getTask  = async (req:Request,res:Response)=>{

    await TaskModel.find();
    res.status(200).json({
        message:"successfully found "
    });
};

   
const CreateTask = async (req:Request,res:Response):Promise<Response>=>{
 try {
    const getUser =await UserModel.findById(req.params.userID);

    if(getUser){
        const {title,date}=req.body;
        let myData :Date = new Date()

        const creatingTask = await TaskModel.create({
            title,
            date:date ? date:myData,
            remainder:"",
            status:false,
            note:"",
        });

        await getUser?.myDay?.push(
            new mongoose.Types.ObjectId(creatingTask!._id),
        );
        await getUser?.task?.push(
            new mongoose.Types.ObjectId(creatingTask!._id)
        )
        getUser.save()

        return res.status(200).json({
            message:"successfully created task",
            data:creatingTask,
        })
    }
    else{
        return res.status(404).json({
            message:".......Can't find User not found",
        
        })
    }

 
 } catch (error) {
    return res.status(404).json({
        message:"an error occured while creating a task "
    })
 }
}

export {CreateTask,getTask}