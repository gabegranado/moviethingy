import express from 'express';

import { createUser } from '../controllers/userController.js';

const router = express.Router();

// router.get('/', getPosts);
router.post('/', createUser);
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;
