import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";
import useStyles from '../../styles';
import MovieForm from "./MovieForm/MovieForm";
import { useSelector } from 'react-redux';
import { getMovies } from "../../actions/movies.js";
import MovieListing from "./MovieListing";
import axios from "axios";

const AdminPage = () => {
    const moviePoster = ''
    const classes = useStyles();
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);
    
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);


    return (
        <Container maxidth="lg">
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <MovieForm />
                        </Grid>
                    </Grid>
                    {movies.map((movie) => (
              <Grid key={movie._id} item xs={12} sm={6} md={6}>
                <MovieListing movie={movie} />
              </Grid>
            ))}
                </Container>
            </Grow>
        </Container>
    )
}

export default AdminPage;