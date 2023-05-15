import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../utils/helpers.js";
import userModel from "../models/userModel.js";

export const userLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });
  if (!user) return res.json({ message: "Username or Password is incorrect" });

  const isValid = comparePassword(password, user.password);
  if (isValid) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, userID: user._id });
  } else {
    return res
      .status(401)
      .json({ message: "Username or Password is incorrect" });
  }
};

export const userRegistration = async (req, res) => {
  const { username } = req.body;

  const user = await userModel.findOne({ username });
  if (user) {
    return res.status(400).json({ message: "User already exists!" });
  } else {
    const password = hashPassword(req.body.password);
    await userModel.create({ password, username });
    res.sendStatus(201);
  }
};
