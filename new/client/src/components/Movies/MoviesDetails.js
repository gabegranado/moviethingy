import React, { useState } from "react";
import axios from "axios";
import '../Movies/Movie/MovieDetails.css'
import moviedetails from '../../images/movieDetail.json'
import buyMovieForm from '../BuyMovie/BuyMovieForm'
import { render } from "react-dom";
import { Component } from "react";
import Popup from "../Popup";


const MovieDetails = () => {
  const movieTitles = [['parasite', moviedetails.parasiteSummary], ['thegirlwiththedragontatto', moviedetails.thegirlwiththedragontattoSummary], ['uncutgems', moviedetails.uncutgemsSummary]]
  const [buttonPopup, setButtonPopup] = useState(false);


  const findMovie = async (titlesSummary) => {
    //const response = await axios.get(`http://localhost:3000/movie/${movieId}`)
    //console.log("movie", response.movieId)
    console.log("dffa")
  }
  return (
    <div className="movie-details">
      <main>
        <h1>Buy Ticket Form</h1>
        <br></br>
        <button onClick={() => setButtonPopup(true)}>BuyTickets</button>
      </main>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <buyMovieForm/>
        </Popup>
    </div>
  );
}

export default MovieDetails;

