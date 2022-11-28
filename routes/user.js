import express from "express";
import {
    loginPage,
    registerPage,
    registerUser,
} from "../controllers/userController.js";

const router = express.Router();

//routing

router.get("/", loginPage);
router.get("/register", registerPage);
router.post("/register", registerUser);

export default router;
