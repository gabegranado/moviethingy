import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";
import useStyles from '../../styles';
import moviePoster from '../../images/girlWithTheDragonTattoo.png';
import MovieForm from "./MovieForm/MovieForm";

const AdminPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log("more test");
    //     dispatch(getPosts());
    // }, [dispatch]);

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
                </Container>
            </Grow>
        </Container>
    )
}

export default AdminPage;