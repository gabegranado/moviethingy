import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Movies from "../Movies/Movies";
// import useStyles from "../../styles";
import { getMovies } from "../../actions/movies";
import { Cookies } from "react-cookie";
import { useSignOut } from "react-auth-kit";
import { logOutUser } from "../../actions/posts";
import { clearTickets } from "../../actions/movieTicket";

const Home = () => {
  //   const classes = useStyles();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const singOut = useSignOut();

  console.log("logging", cookies.get("_auth_state"));

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const signOutBtn = () => {
    dispatch(logOutUser());
    dispatch(clearTickets());
    singOut();
  };


  return (
    <div>
      <Movies />
    </div>
    // <Container maxidth="lg">
    //   <AppBar className={classes.appBar} position="static" color="inherit">
    //     <Typography className={classes.heading} variant="h2" align="center">
    //       Movies
    //     </Typography>
    //     <img
    //       className={classes.image}
    //       src={moviePoster}
    //       alt="epicMoviePoster"
    //       height="60"
    //     />
    //   </AppBar>
    //   <Grow in>
    //     <Container>
    //       <Grid
    //         container
    //         justify="space-between"
    //         alignItems="stretch"
    //         spacing={3}
    //       >
    //         <Grid item xs={12} sm={7}>
    //           <Movies />
    //         </Grid>
    //         <button onClick={signOutBtn}>signOut</button>
    //         {/* <Grid item xs={12} sm={4}> */}
    //         {/* <SignUpForm /> */}
    //         {/* </Grid> */}
    //       </Grid>
    //     </Container>
    //   </Grow>
    // </Container>
  );
};

export default Home;
