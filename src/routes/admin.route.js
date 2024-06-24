import { Router } from "express";
import { adminLogout, createAdmin, loginAdmin } from "../controllers/admin.controller.js";
import { authenticateUser } from "../middlewares/authenticate.js";

const router = Router()

router.route("/login").post(loginAdmin)
router.route("/signup").post(createAdmin)
router.route("/").get(authenticateUser,adminLogout)

export default router