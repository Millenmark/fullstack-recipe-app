import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./database.js";

//routes imports
import userRoute from "./routes/userRoute.js"
import recipeRoute from "./routes/recipeRoute.js";

dotenv.config();
connectToDatabase();
const app = express();
const port = process.env.PORT || 5000

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/auth", userRoute)
app.use("/api/recipe", recipeRoute)

app.listen(port, () => console.log("Server is running..."))