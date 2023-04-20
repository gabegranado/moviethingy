import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import '../Movies/Movie/MovieDetails.css'
import moviedetails from '../../images/movieDetail.json'
import BuyMovieForm from '../BuyMovie/BuyMovieForm.js'
import { render } from "react-dom";
import { Component } from "react";
import Popup from "../Popup";
import { useParams } from "react-router-dom";
import { getMovie } from "../../actions/movie.js";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  //`http://localhost:3000/movie/findMovieById/${params.movieId}`
  const movieTitles = [['parasite', moviedetails.parasiteSummary], ['thegirlwiththedragontatto', moviedetails.thegirlwiththedragontattoSummary], ['uncutgems', moviedetails.uncutgemsSummary]]
  const [buttonPopup, setButtonPopup] = useState(false);
  var movieTitle = '';

  useEffect(() => {
    console.log("movieDetails: ", params.movieId);
    dispatch(getMovie(params.movieId));
  }, [dispatch]);

  const movie = useSelector((state) => state.movie);
  
  if (movie) {
    movieTitle = movie.movieTitle;
  }

  return (
    <div className="movie-details">
      <main>
        <h1> test {movieTitle}</h1>
        <br></br>
        <button onClick={() => setButtonPopup(true)}>BuyTickets</button>
      </main>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <BuyMovieForm/>
        </Popup>
    </div>
  );
}

export default MovieDetails;

