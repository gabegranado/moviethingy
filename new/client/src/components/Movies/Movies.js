import React from "react";
import Movie from "./Movie/Movie";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./style";

const Movies = ({ setCurrentId }) => {
  const movies = useSelector((state) => state.movies);
  // const classes = useStyles();

  console.log("hmmm" + movies);
  return !movies.length ? (
    <CircularProgress />
  ) : (
    <Grid>
      {movies.map((movie) => (
        <Grid>
          <Movie movie={movie} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
  // <div>
  //   <Movie movie={movie} setCurrentId={setCurrentId} />
  // </div>
};

export default Movies;
