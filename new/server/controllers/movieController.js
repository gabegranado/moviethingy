import express from 'express';
import mongoose from 'mongoose';

import Movie from '../model/movieModel.js';

const router = express.Router();

export const addMovie = async (req, res) => {
    const { 
        movieTitle,
        movieTheater,
        movieTheaterNumber,
        movieDate,
        movieTime,
        nowPlaying,
        // moviePoster
     } = req.body;

     console.log("testing movies", movieTitle);

    const newMovie = new Movie({         
        movieTitle,
        movieTheater,
        movieTheaterNumber,
        movieDate,
        movieTime,
        Boolean(nowPlaying),
    })
    if (req.body.movieTitle == '') {
        console.log('make sure movie title was entered');
        res.send('make sure movie title was entered');
    } else {
        try {
            await newMovie.save();
            console.log('Movie Added');
            res.status(201).json(newMovie);
        } catch (error) {
            console.log('error addMovie ', error.message);
            res.status(409).json({ message: error.message });
        }
    }
}

export const getMovies = async (req, res) => {
    try {
        const allMovies = await Movie.find();
        console.log("all movies ", allMovies);
        res.status(200).json(allMovies);
    } catch (error) {
        console.log("error getMovies")
        res.status(409).json({ message: error.message });
    }
}

export const searchMovie = async (req, res) => {
    try {
        const allMovies = await Movie.find({ movieTitle: req.params.searchEntry });
        console.log("all movies ", allMovies);
        res.status(200).json(allMovies);
    } catch (error) {
        console.log("error searchMovies")
        res.status(409).json({ message: error.message });
    }
}

export const deleteMovie = async (req, res) => {
    try {
        const del = await Movie.deleteOne({ _id: req.params.movieId });
        console.log("movie Deleted");
        res.status(200);
    } catch (error) {
        console.log("error DeleteMovies");
        res.status(400);
    }
}

export default router;
