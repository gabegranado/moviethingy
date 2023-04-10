import express from 'express';
import mongoose from 'mongoose';

import User from '../model/userModel.js';

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
            res.status(201).json(newUser);
        } catch (error) {
            console.log('error: ', error.message);
            res.status(409).json({ message: error.message });
        }
    }
}

export default router;
