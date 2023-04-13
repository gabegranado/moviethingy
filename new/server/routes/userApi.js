import express from 'express';
import passport from '../auth/passport.js';
import { createUser, loginUser, getUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/:identifier', 
// passport.authenticate("jwt", { session: false }),
getUser);

export default router;
