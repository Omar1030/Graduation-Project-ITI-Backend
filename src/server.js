import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// ! App
const app = express();
dotenv.config({ path: "src/config/.env" });

// ! Middleware
app.use(express.json());
app.use(cookieParser());

// ! Routes
app.use("/api/welcome", (req, res) => res.send("Welcome to the API"));

// ! Server
app.listen(process.env.SERVER_PORT, () => console.log(`Server running on port ${process.env.SERVER_PORT}`));
