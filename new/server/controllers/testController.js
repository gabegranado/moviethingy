import express from 'express';
import mongoose from 'mongoose';

import Test from '../model/testModel.js';

const router = express.Router();

export const createTestData = async (req, res) => {
    const { testData } = req.body;

    const newTest = new Test({ testData });

    try {
        await newTest.save();

        res.status(201).json(newTest);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getTestData = async (req, res) => {
    try {
        const allTestData = await Test.find();
                
        res.status(200).json(allTestData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



export default router;
