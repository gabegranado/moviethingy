import express from 'express';

import { addMovie, getMovies, getById, searchMovie, deleteMovie } from '../controllers/movieController.js';

const router = express.Router();

router.post('/', addMovie);
router.get('/', getMovies);
router.get('/getById/:id', getById)
router.get('/search/:searchEntry', searchMovie);
router.delete('/:movieId', deleteMovie);
export default router;
