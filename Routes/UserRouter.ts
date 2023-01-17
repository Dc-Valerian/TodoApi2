import {RegisterUser,GetAllUser,GetSingleUser} from  "../Controller/UserController"
import express from "express"

const router = express.Router()


router.route("/getall").get(GetAllUser)
router.route("/getOne/:id").get(GetSingleUser)
router.route("/register").post(RegisterUser)

export default router;