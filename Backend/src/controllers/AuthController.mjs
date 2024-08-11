import { validationResult, matchedData,body} from "express-validator";
import dotenv from 'dotenv'
dotenv.config();
import {error} from '../utilties/error.mjs'
import { USERS } from "../models/users.mjs";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const register = async (req,res) =>{
    const {username, password,name,email} = req.body;

    try{
        // Check if the user exists
        let user = await USERS.findOne({ $or: [{ username }, { email }] })
        if(user){
            return res.status(400).json({msg: 'Username or email already exists'});
        }
        user = new USERS({username,password,name,email});

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {id: user.id}
        };
        jwt.sign(payload, process.env.jwtSecret, {expiresIn: 3600},
            (err,token)=>{
                if (err) throw err;
                res.json({token});
        });
    } catch (err) {
        console.error(err)
        res.status(500).send('server error');
    }
};


export const login = async (req,res)=>{
    const {username,password} = req.body;

    try {
        // Check if the user exists
        let user = await USERS.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
    }
                // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

            // Generate JWT token
        const payload = {
            user: {
                id: user.id
            }
        };


// Sign the JWT (JSON Web Token) with the provided payload using the secret key from the environment variables.
// The token is set to expire in 3600 seconds (1 hour).
// If an error occurs during the signing process, throw an error.
// Send the signed token as a JSON response if successful.
// If an error is caught outside the signing process, log the error message and send a 500 status code with 'Server Error'.
        jwt.sign(payload, process.env.jwtSecret, { expiresIn: 3600 }, 
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    };