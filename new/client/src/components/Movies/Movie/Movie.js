import React from 'react';
import girlWithTheDragonTattoo from '../../../images/girlWithTheDragonTattoo.png';
import parasite from '../../../images/parasite.png';
import uncutgems from '../../../images/uncutgems.png'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { browserHistory } from 'react-router';
import moviedetails from '../../../images/movieDetail.json'

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
      // console.log("HEY LOOK HERE RIGHT HERE", movie.movieTitle);
      // console.log(typeof movie.movieTitle);
      // console.log("hey look here ", i, options[i][0]);
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
  console.log(moviedetails.parasiteSummary)
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