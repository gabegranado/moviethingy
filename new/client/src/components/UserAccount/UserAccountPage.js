import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../actions/movieTicket";
import { getPosts } from "../../actions/posts";
import axios from "axios";
import { getAccountMovieImage } from "../../images/getAccountMovieImage";
import QrCode from '../../images/QrCode.png';

const UserAccountPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  var movie;

  var username = "";
  var movieTicket = [];

  for (var key in params) {
    if (key === "userName") {
      username = params[key];
    }
  }

  useEffect(() => {
    console.log("in UserAccount: ", username);
    dispatch(getPosts(username));
  }, [dispatch]);

  const user = useSelector((state) => state.posts);
  // var movies = [];

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${username}`)
      .then((user) => {
        const parsed = JSON.parse(JSON.stringify(user.data));
        var uId = "";

        for (var key in parsed[0]) {
          if (key === "_id") {
            uId = parsed[0][key];
          }
        }

        dispatch(getTickets(uId));
      })
      .catch((err) => {
        console.log("this error: ", err);
      });
  }, [dispatch]);

  movieTicket = useSelector((state) => state.movieTickets);

  function getUsername() {
    console.log("movie tickets: ", movieTicket)
    const parsed = JSON.parse(JSON.stringify(user));
    console.log("here")

    for (var key in parsed[0]) {
      if (key === "username") {
        return parsed[0][key]
      }
    }
    return ""
  }

  function getQrCode() {
    if (!(getAccountMovieImage() == undefined)) {
      console.log(JSON.parse(JSON.stringify(movieTicket))[0].movieTitle)
      return (
        <div>
          <h1>You're all set to see {JSON.parse(JSON.stringify(movieTicket))[0].movieTitle}. scan this at the Theater!</h1>
        <img src={QrCode} width='200' height='200'/>
        </div>
      );
  }
}

  return (
    <div>
      <h1>Hello {getUsername()}</h1>
      
      {/* <Movie movie={movieTicket}/> */}
      <img
          src={
            getAccountMovieImage() !== "N/A"
              ? getAccountMovieImage()
              : "https://via.placeholder.com/400"
          }
          alt={movieTicket.movieTitle}
        ></img>
        {getQrCode()}
    </div>
    
  );
};

export default UserAccountPage;
