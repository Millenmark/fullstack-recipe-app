import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./database.js";

dotenv.config();
connectToDatabase();
const app = express();
const port = process.env.PORT || 5000

//middleware
app.use(express.json());
app.use(cors());


app.listen(port, () => console.log("Server is running..."))