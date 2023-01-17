import mongoose from "mongoose";

import  {taskData2} from "../AllInterface"


interface   importantTask  extends taskData2,mongoose.Document{}

const importantSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    date:{
        type:String,
    },
    remainder:{
        type:String,
    },
    note:{
        type:String,
    },
    status:{
        type:Boolean,
    },
   

})

export default mongoose.model<importantTask>("important",importantSchema)