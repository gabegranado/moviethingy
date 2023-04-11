import express from 'express';

import { createUser, loginUser, getUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/:identifier', getUser);

export default router;
