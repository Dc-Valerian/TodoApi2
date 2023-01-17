import {getImportant,singleImportantTask,createImportantTask,getImportantTasks} from "../Controller/ImportantController"
import express from "express";

const importantTaskRouter = express.Router()

importantTaskRouter.route("/importantTask/:userID").post(createImportantTask)
importantTaskRouter.route("/importantTask/:userID").get(getImportantTasks)
importantTaskRouter.route("/importantTask/:taskID").get(getImportant)

export default importantTaskRouter