import express from 'express';

import { addMovie, getMovies, searchMovie } from '../controllers/movieController.js';

const router = express.Router();

router.post('/', addMovie);
router.get('/', getMovies);
router.get('/search/:searchEntry', searchMovie);

export default router;
