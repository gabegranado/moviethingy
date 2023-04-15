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
        // !movies.length ? <CircularProgress /> : (
        //   <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        //     {movies.map((movie) => (
        //       <Grid key={movie._id} item xs={12} sm={6} md={6}>
        //         <BuyMovieForm movieId={ movieId }/>
        //         {/* <Movie movie={movie} setCurrentId={setCurrentId} /> */}
        //       </Grid>
        //     ))}
        //   </Grid>
        // )
      );
    };

export default MoviesDetails;