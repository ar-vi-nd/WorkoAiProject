import { Router } from "express";
import { authenticateUser } from "../middlewares/authenticate.js";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser, updateUserPartial } from "../controllers/user.controller.js";

const router = Router()


router.route("/")
        .get(authenticateUser,getAllUsers)
        .post(authenticateUser,createUser)

router.route("/:userId")
.get(authenticateUser,getUserById)
.put(authenticateUser,updateUser)
.patch(authenticateUser,updateUserPartial)
.delete(authenticateUser,deleteUser)





export default router