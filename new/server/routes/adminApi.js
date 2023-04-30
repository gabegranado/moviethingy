import express from 'express';
import { loginAdmin, createAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.post('/', createAdmin);
router.post('/login', loginAdmin);
// router.get('/:identifier', 
// // passport.authenticate("jwt", { session: false }),
// getUser);

export default router;
