import jwt from "jsonwebtoken";
import {hashPassword, comparePassword} from "../utils/helpers.js"
import userModel from "../models/userModel.js";

export const userLogin = () => {};

export const userRegistration = async (req, res) => {
  const { username } = req.body;

  const user = await userModel.findOne({ username });
  if (user) {
    return res.status(400).json({ message: "User already exists!" });
  } else {
    const password = hashPassword(req.body.password);
    console.log(password);
    await userModel.create({ password, username });
    res.sendStatus(201);
  }
};
