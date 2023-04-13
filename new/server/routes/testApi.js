import express from 'express';
import passport from '../auth/passport.js';
import { createTestData, getTestData } from '../controllers/testController.js';

const router = express.Router();

router.post('/', createTestData);
router.get('/', getTestData);

// router.get('/', passport.authenticate("jwt", { session: false }), getTestData);

export default router;