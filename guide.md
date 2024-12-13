How to create this project Step by step

1. Create a git repo and have that repo on local system

2. Create two seperate folders for backend and frontend

3. In the frontend initialise a react project using vite `npm create vite@latest .`

4. come to root level and initialise a package.json -> `npm init-y`

5. In backend run `npm i express cookie-parser bcrypt mongoose mailtrap dotenv jsonwebtoken crypto`

6. create a index.js and import the following dependencies and create a DB connection and test it out

boiler plate for index.js is


import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
//import authRoute
app.use("/api/auth", authRoutes )

app.listen(PORT, async () => {
    //import connectDb()
    await connectDb();
    console.log(`Server is Running on PORT ${PORT}`)
})


7. create a db in mongoDB and get the URI and put it in .env

8. create following folders -> routes, controllers, models

9. create routes and use controller functions in that to handle the logic

10. create a data model as per your app requirement using mongoose refer sample below
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique : true
    },

    password: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    lastLogin: {
        type: Date,
        default : Date.now
    },

    isVerified: {
        type: Boolean,
        default : false
    },

    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    veriticationToken: String,
    verificationTokenExpiresAt: Date

}, { timestamps: true });


export const User = mongoose.model("User", userSchema)


