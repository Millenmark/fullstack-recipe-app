import recipeModel from "../models/recipeModel.js";

export const getAllRecipes = async (req, res) => {
  try {
    const response = await recipeModel.find({})
    res.json(response)
  } catch (error) {
    res.json(error)
  }
}