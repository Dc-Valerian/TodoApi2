import {CreateTask,getTask} from "../Controller/TaskControllerl"
import express from "express"

const router = express.Router()

router.route("/createTask/:userID").post(CreateTask)


export default router