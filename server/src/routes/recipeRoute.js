import {Router} from "express"
import { getAllRecipes } from "../controllers/recipeController.js"

const recipeRoute = Router()

recipeRoute.get("/", getAllRecipes)

export default recipeRoute