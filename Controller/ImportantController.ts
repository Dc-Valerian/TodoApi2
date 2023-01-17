import UserModel from "../Model/UserModel";
import ImportantTask from "../Model/ImportantTask";

import { Response,Request } from "express";
import mongoose from "mongoose";

// to create important task

const createImportantTask = async (req:Request,res:Response):Promise<Response>=>{
try {
    const createTaskID = await UserModel.findById(req.params.userID)

    if (createTaskID) {
        const {title,date}=req.body;
        const DateTime = new Date();
        const CreateTasks = await ImportantTask.create({
            title,
            date:date? date:DateTime,
            remainder:"",
            note:"",
            status:false,
        });
        await createTaskID?.task.push(
            new mongoose.Types.ObjectId(CreateTasks!._id)
        );
        await createTaskID?.important.push(
            new mongoose.Types.ObjectId(CreateTasks!._id)
        )
        createTaskID.save();
        return res.status(200).json({
            message:"new tasked created",
            data:CreateTasks,
        })
    } else {
        return res.status(404).json({
            message:"opps.....an error occurred....couldn't get CreateTaskID",
        })
    }
} catch (error) {
    return res.status(404).json({
        message:"oops.........an error ..... coudn't create important Task ",
        data:error,
    })
}
}

// to get all 
const getImportant = async(req:Request,res:Response):Promise<Response>=>{
    try {
        const ImportantGet= await ImportantTask.findById(req.params.userID).populate(
            {
                path:"important",
            }
        )
        return res.status(200).json({
            message:"successfully got all important task",
            data:ImportantGet
        })
    } catch (error) {
        return res.status(404).json({
            message:"an error occurred ....couldn't get important task",
            data:error,
        })
    }
}






// to get all important task

const getImportantTasks = async(req:Request,res:Response):Promise<Response>=>{
    try {
        const importantTasks =await ImportantTask.find()
        return res.status(200).json({
            message:"successfully got your important task",
            data:importantTasks
        })
    } catch (error) {
        return res.status(404).json({
            message:"oops.....an error occurred Couldn't get your important task",
            data:error,
        })
    }

}

// getting single important task \

const singleImportantTask = async(req:Request,res:Response):Promise<Response>=>{
try {
    const singleTask = await ImportantTask.findById(req.params.taskID)

    return res.status(202).json({
        message:"successfully got your single task ",
        data:singleTask
    })
} catch (error) {
    return res.status(404).json({
        message:"oops...an error occurred......couldn't get single user",
        data:error,
    })
}
}

export {getImportant,singleImportantTask,createImportantTask,getImportantTasks}