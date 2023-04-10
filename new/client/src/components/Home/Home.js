import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { getPosts } from '../../actions/posts'
import Posts from '../Posts/Posts';
import Movies from '../Movies/Movies'
import SignUpForm from '../SignUp/SignUpForm';
import useStyles from '../../styles';
import moviePoster from '../../images/girlWithTheDragonTattoo.png';
import { getMovies } from "../../actions/movie";

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("more test");
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <Container maxidth="lg">
            <AppBar className={ classes.appBar }position="static" color="inherit">
                <Typography className={classes.heading}variant="h2" align="center">Movies</Typography>
                <img className={classes.image}src={moviePoster} alt="epicMoviePoster" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Movies />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <SignUpForm />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default Home;