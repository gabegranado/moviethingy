import React from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { browserHistory } from 'react-router';
import moviedetails from '../../../images/movieDetail.json'
import { getImage } from '../../../images/getImage';

const Movie = ({ movie, setCurrentId }) => {
  const navigate = useNavigate();

  const redirctToMoiveDetails = () => {
    browserHistory.push('Home');
    navigate(`/movieDetails/${movie._id}`);
  }

  return (
    <div>
    <img  src={getImage(movie.movieTitle)}/>
    <Button variant="contained" color="secondary" size="small" onClick={redirctToMoiveDetails} fullWidth>Movie details</Button>
    </div>
  );
};

export default Movie;