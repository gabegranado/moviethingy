import React, { useState, useEffect } from "react";
import useStyles from "../Form/styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { browserHistory } from "react-router";
import { useParams } from "react-router-dom";
import { getPosts } from "../../actions/posts";
import { buyTicket } from "../../actions/buyTicket";
import Cookies from "js-cookie";
import axios from "axios";
import { getTickets } from "../../actions/movieTicket";

import { createUser } from "../../actions/posts";

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
  const c = "ddddddddd";
  const username = Cookies.get("_auth_state");
  const user = useSelector((state) => state.posts);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed = JSON.parse(JSON.stringify(user));
    var uId = "";

    for (var key in parsed[0]) {
      console.log("key", key, "parsed", parsed[0][key]);
      if (key === "_id") {
        uId = parsed[0][key];
      }
    }

    dispatch(buyTicket(params.movieId, uId));
    dispatch(getTickets(uId));

    clear();
  };

  const clear = () => {
    setuserData({ username: "", email: "", password: "" });
  };

  return (
    <Paper className={classes.paper}>
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
          color="primary"
          size="large"
          type="submit"
          to="/test"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          to="/App"
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default BuyMovieForm;
