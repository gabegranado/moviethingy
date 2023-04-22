import React from 'react';
import girlWithTheDragonTattoo from '../../../images/girlWithTheDragonTattoo.png';
import parasite from '../../../images/parasite.png';
import uncutgems from '../../../images/uncutgems.png'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { browserHistory } from 'react-router';

// import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './style';

const Movie = ({ movie, setCurrentId }) => {
  const navigate = useNavigate();
  const options = [
    ['parasite', parasite],
    ['girlwiththedragontattoo', girlWithTheDragonTattoo],
    ['uncutgems', uncutgems]
  ]

  const getPoster = () => {
    for (let i in options) {
      if (options[i][0] == movie.movieTitle) { return options[i][1] };
    }
    return 'test';
    };

  const redirctToMoiveDetails = () => {
    console.log("herhe", movie);
    console.log("movieID: ", movie._id)
    browserHistory.push('Home');
    navigate(`/movieDetails/${movie._id}`);
  }
// 
  return (
    <div>
      {/* <h1>{getPoster()}</h1> */}
    <img  src={getPoster()} alt={getPoster()}/>
    <Button variant="contained" color="secondary" size="small" onClick={redirctToMoiveDetails} fullWidth>Movie details</Button>
    </div>
  );
};

export default Movie;