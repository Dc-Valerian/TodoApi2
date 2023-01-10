import UserModel from "../Model/UserModel";
import { Request,Response } from "express";

const GetAllUser = async(req:Request,res:Response):Promise<Response>=>{
   try {
    const getUser = await UserModel.find();

    return res.status(200).json({
        message:"Found Successfully",
        data:getUser,
    })
   } catch (error) {
    return res.status(404).json({
        message:"ooops.....an error has occurred",
        data:error
    })
   }
}
const GetSingleUser = async(req:Request,res:Response):Promise<Response>=>{
   try {
    const singleUser = await UserModel.findById(req.params.id);

    return res.status(200).json({
        message:"Found Successfully",
        data:singleUser,
    })
   } catch (error) {
    return res.status(404).json({
        message:"ooops.....an error has occurred",
        data:error
    })
   }
}

const RegisterUser = async (req:Request,res:Response):Promise<Response>=>{
    try {
        const {email,name,password} =req.body;

        const user = await UserModel.findOne({email:email})

        if (user) {
            return res.status(404).json({
                message:"This email already exist",
            });
        } else {
              const regUser =await UserModel.create({
                name,email,password,
              })
        }

        return res.status(200).json({

            message:"successfully registered",
            data:user
        })
    } catch (error) {
        return res.status(404).json({
            message:"couldn't register you",
            data:error
        })
    }
}

export  {GetAllUser,RegisterUser,GetSingleUser}