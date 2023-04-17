import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import BuyMovieForm from '../BuyMovie/BuyMovieForm';
import useStyles from './style';


const MoviesDetails = ({ movieId }) => {
    const movies = useSelector((state) => state.movies);
    const classes = useStyles();

    console.log("hmmm" + movies);
    return (
        <BuyMovieForm movieId={movieId}/>
      );
    };

export default MoviesDetails;