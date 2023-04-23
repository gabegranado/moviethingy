import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './style';
import Comments from '../comments/Comments'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import '../Movies/Movie/MovieDetails.css'
import allMovieDetails from '../../images/movieDetail.json'
import BuyMovieForm from '../BuyMovie/BuyMovieForm.js'
import { render } from "react-dom";
import { Component } from "react";
import Popup from "../Popup";
import { useParams } from "react-router-dom";
import { getMovie } from "../../actions/movie.js";
import { getImage } from "../../images/getImage.js";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  //`http://localhost:3000/movie/findMovieById/${params.movieId}`
  const [buttonPopup, setButtonPopup] = useState(false);
  var movieTitle = '';
  var movieSummary = '';

  useEffect(() => {
    console.log("movieDetails: ", params.movieId);
    dispatch(getMovie(params.movieId));
  }, [dispatch]);

  const movie = useSelector((state) => state.movie);
  
  if (movie) {
    movieTitle = movie.movieTitle;
    const parsed = JSON.parse(JSON.stringify(allMovieDetails));
    var movieDetails = '';

    for (var key in parsed) {
      if (key == movieTitle) {
        movieDetails = parsed[key]
      }
    }
  }

  return (
    <div className="movie-details">
      <main>
        <h1> test {movieDetails.title}</h1>
        <br></br>
        <button onClick={() => setButtonPopup(true)}>BuyTickets</button>
      </main>
      <img src={getImage(movieTitle)} />
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <BuyMovieForm/>
        </Popup>
        <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
}

export default MovieDetails;
