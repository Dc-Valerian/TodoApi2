import express,{Application,Request,Response} from "express"
const PORT :number = 5000;
import "../Config/db"
import user from "../Routes/UserRouter"
import taskRoute from "../Routes/TaskRouter"

import cors from "cors"

const app:Application = express()

app.use(cors())
app.use(express.json())

app.get("/",(req:Request,res:Response)=>{
 res.json({
    message:"welcome to my Todo"
 })
})

app.use("/api",user)
app.use("/api/task",taskRoute)
app.listen(PORT,()=>{
    console.log(`Listeninig to ${PORT}`);
    
})