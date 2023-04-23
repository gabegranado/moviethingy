import React from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { browserHistory } from 'react-router';
import axios from "axios";

// import { likePost, deletePost } from '../../../actions/posts';

const MovieListing = ({ movie }) => {

    const deleteMovie = () => {
        window.location.reload();
        axios.delete(`http://localhost:3000/movie/${movie._id}`)
    }

  return (
    <div>
      <h1>{movie.movieTitle}</h1>
      <h2>{movie.movieTheater}</h2>
    <Button variant="contained" color="secondary" size="small" onClick={deleteMovie} fullWidth>Delete Movie</Button>
    </div>
  );
};

export default MovieListing;