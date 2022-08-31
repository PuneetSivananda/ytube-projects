import express from "express"
import User from "../models/User.js"
import crypto from "crypto"


// export const matchPassword = (passowrd, hash) => {
//     const re_entered_password = "my_password";
// To verify the same - salt (stored in DB) with same other parameters used while creating hash (1000 iterations, 64 length and sha512 digest)
// const newHash = crypto.pbkdf2Sync(re_entered_password, salt, 1000, 64, 'sha512').toString('hex');
// check if hash (stored in DB) and newly generated hash (newHash) are the same
// hash === newHash;
// };
const userRouter = express.Router()

// register a user
userRouter.post("/register", async (req, res) => {
    try {
        //generate pass
        const salted = crypto.randomBytes(16).toString('hex');
        const hash = crypto.pbkdf2Sync(req.body.password, salted, 1000, 64, 'sha512').toString('hex');
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            passwordHash: salted
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

userRouter.post("/", async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
})


export { userRouter }