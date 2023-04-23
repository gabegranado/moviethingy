import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import BuyMovieForm from '../BuyMovie/BuyMovieForm';
import useStyles from './style';
import Comments from '../comments/Comments'

const MoviesDetails = ({ movieId }) => {
    const movies = useSelector((state) => state.movies);
    const classes = useStyles();

    console.log("hmmm" + movies);
    return (
      <div>
        <BuyMovieForm movieId={movieId}/>
        <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
        </div>
      );
    };

export default MoviesDetails;