import express from 'express';
import mongoose from 'mongoose';

import MovieTicket from '../model/movieTicketModel.js';
import Movie from '../model/movieModel.js';

const router = express.Router();

export const buyMovieTicket = async (req, res) => {
    const { 
        movieId,
        userId,
     } = req.params;

     console.log(movieId)

    const newMovieTicket = new MovieTicket({
        movieId,
        userId, 
    })

    if (req.body.movieId == '') {
        console.log('error no userId sent');
        res.status(404).send('error no userId sent');
    } else {
        try {
            await newMovieTicket.save();
            console.log('Movie Ticket Bought');
            res.status(201).json(newMovieTicket);
        } catch (error) {
            console.log('error newMovieTickets', error.message);
            res.status(409).json({ message: error.message });
        }
    }
}

export const getTickets = async (req, res) => {
    try {
        const userId = req.params.id;
        console.log(typeof req.params.id, req.params.id, "went through");

        const MovieTickets = await MovieTicket.findOne({ userId:  userId });
        const movieId = MovieTickets.movieId;
        const movie = await Movie.find({ _id: movieId });
        console.log("Movie Ticket ", movie);
        res.status(200).json(movie);
    } catch (error) {
        console.log(typeof req.params.id, req.params.id);
        console.log("error getTickets")
        res.status(409).json({ message: error.message });
    }
}

export default router;
