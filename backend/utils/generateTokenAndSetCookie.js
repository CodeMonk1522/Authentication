import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = async (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    })

    res.cookie("token", token, {
        httpOnly: true, //can be only accessed from clientside
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", //prevents CSRF
        maxAge: 7 * 24 * 60 * 60 * 1000
        
    });

    return token;

}