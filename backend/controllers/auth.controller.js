import { User } from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js"
export const signup = async (req, res) => {
    console.log('Signup is hit')
    const { email, password, name } = req.body
    console.log(req.body)
    try {
        console.log(email, password, name)

        if (!email || !password || !name) {
            return res.status(400).json({
            message: "Something is Missing",
            status: false,
        });
        }

        const userAlreadyExists = await User.findOne({ email });

        if (userAlreadyExists) {
            return res.status(400).json({
                message: "User already exists",
                status: false
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = Math.floor(10000 + Math.random() * 90000).toString();
        const user = new User({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 //24 hours
        });

        await user.save();

        //creating jwt
        generateTokenAndSetCookie(res, user._id);

        res.status(201).json({
            message: "User created Successfully",
            success: true,
            user: {
                ...user._doc,
                password: undefined
            }
            
        })

        
    } catch (error) {
       console.log(`Error: ${error}`)
        
    }
}






export const login = async(req, res) => {

    res.send("login Route")
}
export const logout = async(req, res) => {

    res.send("logout Route")
}