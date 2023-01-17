import express,{Application,Request,Response} from "express"
const PORT :number = 3030;
import "../Config/db"
import user from "../Routes/UserRouter"
import taskRoute from "../Routes/TaskRouter"
import importantTaskRouter from "../Routes/ImportantTaskRoutes";

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
app.use("/api/importanttasks",importantTaskRouter)
app.listen(PORT,()=>{
    console.log(` ~ ~ LocalHost is Listeninig to ${PORT} ~ ~`);
    
}) 