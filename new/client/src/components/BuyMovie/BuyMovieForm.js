import React, { useState, useEffect } from "react";
import useStyles from "../Form/styles";
import {
  TextField,
  Button,
  Typography,
  Paper,
  rgbToHex,
} from "@material-ui/core";
// import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { browserHistory } from "react-router";
import { useParams } from "react-router-dom";
import { getPosts } from "../../actions/posts";
import { buyTicket } from "../../actions/buyTicket";
import { getTickets } from "../../actions/movieTicket";
import Cookies from "js-cookie";
import axios from "axios";
import "./BuyMovieForm.css";

import { createUser } from "../../actions/posts";
import { PromiseProvider } from "mongoose";

const BuyMovieForm = (movieId) => {
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const username = Cookies.get("_auth_state");

  useEffect(() => {
    if(username) {
    dispatch(getPosts(JSON.parse(username).identifier));
    }
}, [dispatch]);

  const user = useSelector((state) => state.posts);

  // console.log("username in buymovieform: ", JSON.parse(user));
  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed = JSON.parse(JSON.stringify(user));
    var uId = "";
    var u = ""
    for (var key in parsed[0]) {
      console.log("key", key, "parsed", parsed[0][key]);
      if (key === "_id") {
        uId = parsed[0][key];
      }
      if (key === "username") {
        u = parsed[0][key]
      }
    }
    
    if (uId && username) {
    dispatch(buyTicket(params.movieId, uId));
    dispatch(getTickets(uId));
    navigate(`/UserAccount/${u}`);
  } else {
      alert('Error: you must be signed in to buy tickets');
    }
    clear();
  };

  const clear = () => {
    setuserData({ username: "", email: "", password: "" });
  };

  return (
    /*
    <div className="primary">
    <Paper elevation={3} variant='outlined' className="paper">
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Buy Movie</Typography>
        <TextField
          
          name="username"
          variant="outlined"
          label="Username"
          fullWidth
          value={userData.username}
          onChange={(e) =>
            setuserData({ ...userData, username: e.target.value })
          }
        />
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          fullWidth
          value={userData.email}
          onChange={(e) => setuserData({ ...userData, email: e.target.value })}
        />
        <TextField
          name="password"
          type="password"
          variant="outlined"
          label="Password"
          fullWidth
          value={userData.password}
          onChange={(e) =>
            setuserData({ ...userData, password: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color= "primary"
          size="large"
          type="submit"
          to="/test"
          fullWidth
        >
          Buy Ticket
        </Button>
      </form>
    </Paper>
    </div>
    */
    <div class="container">
      <div class="title">Buy Tickets</div>
      <form action="#">
        <div class="card-details">
          <div class="input-box">
            <span class="details">Name On Card</span>
            <input type="text" placeholder="Casmiro Grenado"></input>
          </div>
          <div class="input-box">
            <span class="details">Credit Card</span>
            <input type="text" placeholder="0000-0000-0000-0000"></input>
          </div>
          <div class="input-box">
            <span class="details">CVV</span>
            <input type="text" placeholder="***"></input>
          </div>
          <div class="input-box">
            <span class="details">Expiration Date</span>
            <input type="text" placeholder="mm/dd/yyyy"></input>
          </div>
          <div class="button">
            <input type="submit" value="Buy Now" onClick={handleSubmit}></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BuyMovieForm;
