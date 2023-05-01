import React, { useState, useEffect } from 'react';
import Movie from '../Movies/Movie/Movie';
import { Grid, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../actions/movies.js';
import { useNavigate } from "react-router-dom";

import useStyles from '../Movies/style';


const BrowseMoviesNowPlaying = ({ setCurrentId }) => {
    const state = { shown: "upcoming"}
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);
    const [shownMovies, setShownMovies] = useState(get_shown_movies())
    const classes = useStyles();

    useEffect(() => {
        dispatch(getMovies());
        setShownMovies(get_shown_movies())
    }, [dispatch]);

    function get_shown_movies() {
        var movieSelection = [];
        console.log("movies: ", movies);
        for (var key in movies) {
            if (!movies[key].nowPlaying) {
                movieSelection.push(movies[key])
                console.log('key: ', key, "movies[key]: ", movies[key])
            }
        }
        return movieSelection;
    }

    const switchPage = () => {
      navigate(`/catelog`);

    }
    console.log("hmmm" + movies);
    return (
        <div>
            <h1>Upcoming</h1>
            <button className='nowplaying-button' onClick={switchPage}>Now Playing</button>
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {shownMovies.map((movie) => (
              <Grid key={movie._id} item xs={12} sm={6} md={6}>
                <Movie movie={movie} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
          </div>
      );
    };

export default BrowseMoviesNowPlaying;