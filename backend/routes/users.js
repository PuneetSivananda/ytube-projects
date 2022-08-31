import express from "express"
import User from "../models/User.js"
import { randomBytes, scryptSync } from 'crypto';

const encryptPassowrd = (password, salt) => {
    return scryptSync(password, salt, 32).toString('hex');
};

export const hashPassword = (password) => {
    console.log(password)
    // Any random string here (ideally should be atleast 16 bytes)
    const salt = randomBytes(16).toString('hex');
    console.log(salt)
    return encryptPassowrd(password, salt) + salt;
};

// fetch the user from your db and then use this function

export const matchPassword = (passowrd, hash) => {
    // extract salt from the hashed string
    // our hex password length is 32*2 = 64
    const salt = hash.slice(64);
    const originalPassHash = hash.slice(0, 64);
    const currentPassHash = encryptPassowrd(passowrd, salt);
    return originalPassHash === currentPassHash;
};
const userRouter = express.Router()

// register a user
userRouter.post("/register", async (req, res) => {
    try {
        //generate pass
        console.log(req.body.passowrd)
        const hashedPassword = hashPassword(req.body.passowrd)
        //create user
        console.log(hashedPassword)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })
        //save user
        const user = await newUser.save()
        res.status(200).json(user._id)
        //send response

    } catch (err) {
        res.status(500).json(err)
    }
})

// login user

userRouter.get("/", async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
})


export { userRouter }