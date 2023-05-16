import recipeModel from "../models/recipeModel.js";
import userModel from "../models/userModel.js";

export const getAllRecipes = async (req, res) => {
  try {
    const response = await recipeModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

export const createRecipe = async (req, res) => {
  const recipe = await recipeModel.create(req.body);
  try {
    res.json(recipe);
  } catch (error) {
    res.json(error);
  }
};

export const savedRecipes = async (req, res) => {
  try {
    const recipe = await recipeModel.findById(req.body.recipeID);
    const user = await userModel.findById(req.body.userID);
    user.savedRecipes.push(recipe);
    await user.save();
    res.json({ savedRecipes: user.savedRecipes });
  } catch (error) {
    res.json(error);
  }
};

export const getSavedRecipes = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userID);
    res.json({ savedRecipes: user?.savedRecipes });
  } catch (error) {
    res.json(error);
  }
};
