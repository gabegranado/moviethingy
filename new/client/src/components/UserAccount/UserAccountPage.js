import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../actions/movieTicket";
import { getPosts } from "../../actions/posts";
import axios from "axios";
import Movie from "../../components/Movies/Movie/Movie";

const UserAccountPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  var username = "";
  var movieTicket = [];

  for (var key in params) {
    if (key === "userName") {
      username = params[key];
    }
  }

  useEffect(() => {
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

  return (
    <div>
      <h1>test: {JSON.stringify(user)}</h1>
      <h2>movie: {JSON.stringify(movieTicket)}</h2>
      {/* <Movie movie={movieTicket}/> */}
    </div>
  );
};

export default UserAccountPage;