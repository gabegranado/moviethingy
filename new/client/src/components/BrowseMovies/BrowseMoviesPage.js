import React from 'react';
import Movie from '../Movies/Movie/Movie';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './style';


const BrowseMoviesPage = ({ setCurrentId }) => {
    const state = { shown: "upcoming"}
    const movies = useSelector((state) => state.movies);
    const classes = useStyles();

    console.log("hmmm" + movies);
    return (
        !movies.length ? <CircularProgress /> : (
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {movies.map((movie) => (
              <Grid key={movie._id} item xs={12} sm={6} md={6}>
                <Movie movie={movie} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
        )
      );
    };

export default BrowseMoviesPage;