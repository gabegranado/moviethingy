import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import User from '../model/userModel.js';
import * as CONFIG from "../../../config.json" assert { type: "json" };
import * as dotenv from 'dotenv';
import bcrypt from 'bcrypt-nodejs';

dotenv.config();

var JWT_SECRET = CONFIG.default.JWT_SECRET;

const router = express.Router();

export const createUser = async (req, res) => {
    const { username, password, email } = req.body;

    const newUser = new User({ username, password, email })
    if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == '') {
        console.log('make sure username/email/password were entered');
        res.send('make sure username/email/password were entered');
    } else {
        try {
            await newUser.save();
            console.log('User created');
            const jwtToken = jwt.sign(
                { username: username, email: email },
                process.env.JWT_KEY
            );
            res.status(201).json({ success: true, message: "Success, Created", token: jwtToken, username: username, user: newUser });
        } catch (error) {
            console.log('error createUser', error.message);
            res.status(409).json({ message: error.message });
        }
    }
}

export const loginUser = async (req, res) => {
    try {
    const { identifier, password } = req.body;
    const user = await User.find(
        { $or: [{username: identifier}, {email: identifier}] }
        ).exec();
        console.log(user[0].password, password);

    if (!user.length) {
        res.status(400).json({error: "not valid username/email"});
    } else {
        bcrypt.compare(password, user[0].password, function(err, result) {
            if (err){
               res.status(400).json({ message: err });
              }
              if (result) {
                const jwtToken = jwt.sign(
                    { username: user[0].username, email: user[0].email },
                    process.env.JWT_KEY
                );
                console.log("success, user loged in");
                res.status(200).json({ success: true, message: "Success, user logged in", token: jwtToken, username: user[0].username });

              } else {
                console.log("passwords do not match");
                res.status(400).json({success: false, message: 'passwords do not match'});
              }
          });
    }
    } catch (error) {
        console.log("error loginUser ", error.message);
        res.status(400).json({ message: error.message });
    }

}

export const getUser = async (req, res) => {
    try {
    console.log("getUser", req.params.identifier)
    const user = await User.find(
        { $or: [{username: req.params.identifier}, {email: req.params.identifier}] }
        ).exec();

    if (!user.length) {
        console.log("not valid username/email")
        res.status(404).json({error: "not valid username/email"});
    } else {
        console.log('user found');
        console.log("user stuff", user);
        res.status(200).json(user);
    }
    } catch (error) {
        console.log("error getUser", error);
        res.status(400).json({ message: error.message });
    }
}

export default router;
