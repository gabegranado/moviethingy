import express from 'express';

import { createTestData, getTestData } from '../controllers/testController.js';

const router = express.Router();

router.post('/', createTestData);
router.get('/', getTestData);

export default router;