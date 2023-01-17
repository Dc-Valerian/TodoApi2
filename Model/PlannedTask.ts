import mongoose from "mongoose";

import  {taskData2} from "../AllInterface"


interface   plannedTask  extends taskData2,mongoose.Document{}

const plannedSchema = new mongoose.Schema({
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
    day:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

})

export default mongoose.model<plannedTask>("planned",plannedSchema)