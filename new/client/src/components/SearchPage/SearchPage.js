import React, { useState, useEffect } from 'react';
import Movie from '../Movies/Movie/Movie';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../actions/movies.js';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import useStyles from '../Movies/style';


const SearchPage = ({ setCurrentId }) => {
    const state = { shown: "upcoming"}
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);
    const [shownMovies, setShownMovies] = useState(get_shown_movies())
    const classes = useStyles();
    const params = useParams();

    useEffect(() => {
        dispatch(getMovies());
        // console.log("", params.movieTitle)
        setShownMovies(get_shown_movies())
    }, [dispatch]);

    function get_shown_movies() {
        var movieSelection = [];

        if (params) {
            console.log("params", params.movieTitle);
            console.log("movies: ", movies);
            for (var key in movies) {
                console.log(movies[key].movieTitle)
                if (movies[key].movieTitle === params.movieTitle) {
                    movieSelection.push(movies[key])
                    console.log('key: ', key, "movies[key]: ", movies[key])
                }
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

export default SearchPage;