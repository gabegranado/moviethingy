import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";
import useStyles from '../../styles';
import moviePoster from '../../images/girlWithTheDragonTattoo.png';
import MovieForm from "./MovieForm/MovieForm";
import { useSelector } from 'react-redux';
import { getMovies } from "../../actions/movie";
import MovieListing from "./MovieListing";
import axios from "axios";

const AdminPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);
    
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);


    return (
        <Container maxidth="lg">
            <AppBar className={ classes.appBar }position="static" color="inherit">
                <Typography className={classes.heading}variant="h2" align="center">Admin Page</Typography>
                <img className={classes.image}src={moviePoster} alt="epicMoviePoster" height="60"/>
            </AppBar>
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