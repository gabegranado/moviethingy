import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../actions/movieTicket";
import { getPosts } from "../../actions/posts";
import axios from "axios";

// import { createUser } from '../../actions/posts';

const UserAccountPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  // const parsed = JSON.parse(JSON.stringify(user))[0];

  var username = "";
  var movieTicket = [];

  useEffect(() => {
    dispatch(getPosts(username));
  }, [dispatch]);

  for (var key in params) {
    if (key === "userName") {
      username = params[key];
    }
  }

  const user = useSelector((state) => state.posts);
  // var movies = [];

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/${username}`)
      .then((user) => {
        const parsed = JSON.parse(JSON.stringify(user.data));
        var uId = ''

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

  // console.log("userstuff hereree " + user);
  return (
    <div>
      <h1>test: {JSON.stringify(user)}</h1>
      <h2>movie: {JSON.stringify(movieTicket)}</h2>
      {/* <button onClick={handlesubmit('gabe')}>gabe</button>
                    <button onClick={handlesubmit('cola')}>cola</button> */}
    </div>
  );
};

export default UserAccountPage;
