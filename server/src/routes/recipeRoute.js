import { Router } from "express";
import {
  getAllRecipes,
  createRecipe,
  savedRecipes,
  getSavedRecipes,
} from "../controllers/recipeController.js";

const recipeRoute = Router();

recipeRoute.get("/", getAllRecipes);
recipeRoute.post("/", createRecipe);
recipeRoute.put("/", savedRecipes);
recipeRoute.get("/savedRecipes/ids", getSavedRecipes);
export default recipeRoute;
