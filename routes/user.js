import express from "express";
import {
    loginPage,
    registerPage,
    registerUser,
    loginUser,
    userProfile,
    logoutUser,
} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { authRedirectMiddleware } from "../middlewares/authRedirectMiddlewares.js";

const router = express.Router();

//routing

router.get("/", authMiddleware, loginPage);
router.post("/", loginUser);
router.get("/register", authMiddleware, registerPage);
router.post("/register", registerUser);
router.get("/logout", authRedirectMiddleware, logoutUser);

//profile
router.get("/profile", authRedirectMiddleware, userProfile);

export default router;
