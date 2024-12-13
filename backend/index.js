import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/connecDb.js";
import authRoutes from './routes/auth.route.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use("/api/auth", authRoutes )












app.listen(PORT, async () => {
    await connectDb();
    console.log(`Server is Running on PORT ${PORT}`)
})
