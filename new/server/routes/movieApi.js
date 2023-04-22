import express from 'express';

import { addMovie, getMovies, searchMovie, deleteMovie } from '../controllers/movieController.js';

const router = express.Router();

router.post('/', addMovie);
router.get('/', getMovies);
router.get('/search/:searchEntry', searchMovie);
router.delete('/:movieId', deleteMovie);
export default router;
