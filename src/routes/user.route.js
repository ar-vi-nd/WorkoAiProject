import { Router } from "express";
import User from "../models/user.model.js";
import { getAllUsers } from "../controllers/user.controller.js";

const router = Router()

router.route("/")
        .get(getAllUsers)



export default router