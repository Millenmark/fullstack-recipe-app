import { Router } from "express";
import {userLogin, userRegistration} from "../controllers/userController.js"

const userRoute = Router();

userRoute.post("/register", userRegistration);
userRoute.post("/login", userLogin);

export default userRoute