import express from 'express';

import { addMovie, getMovies, findMovieById } from '../controllers/movieController.js';

const router = express.Router();

router.post('/', addMovie);
router.get('/', getMovies);
router.get('/findMovieById/:movieId', findMovieById);

export default router;
