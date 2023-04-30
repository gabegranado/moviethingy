import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import Admin from '../model/adminModel.js';
import * as CONFIG from "../../../config.json" assert { type: "json" };
import * as dotenv from 'dotenv';
import bcrypt from 'bcrypt-nodejs';

dotenv.config();

var JWT_SECRET = CONFIG.default.JWT_SECRET;

const router = express.Router();

export const createAdmin = async (req, res) => {
    const { username, password, email } = req.body;

    const newAdmin = new Admin({ username, password, email })
    if (req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == '') {
        console.log('make sure username/email/password were entered');
        res.send('make sure username/email/password were entered');
    } else {
        try {
            await newAdmin.save();
            console.log('User created');
            const jwtToken = jwt.sign(
                { username: username, email: email },
                process.env.JWT_KEY
            );
            res.status(201).json({ success: true, message: "Success, Created", token: jwtToken, username: username, admin: newAdmin });
        } catch (error) {
            console.log('error createUser', error.message);
            res.status(409).json({ message: error.message });
        }
    }
}


export const loginAdmin = async (req, res) => {
    try {
    const { identifier, password } = req.body;
    const admin = await Admin.find(
        { $or: [{username: identifier}, {email: identifier}] }
        ).exec();
        console.log(admin[0].password, password);

    if (!admin.length) {
        res.status(400).json({error: "not valid username/email"});
    } else {
        bcrypt.compare(password, admin[0].password, function(err, result) {
            if (err){
               res.status(400).json({ message: err });
              }
              if (result) {
                const jwtToken = jwt.sign(
                    { username: admin[0].username, email: admin[0].email },
                    process.env.JWT_KEY
                );
                console.log("success, Admin loged in");
                res.status(200).json({ success: true, message: "Success, Admin logged in", token: jwtToken, username: admin[0].username });

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

export default router;
