import React, { useState } from 'react';
import useStyles from '../Form/styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { browserHistory } from 'react-router';
import axios, { AxiosError } from "axios";
import { getPosts } from '../../actions/posts';

import { createUser } from '../../actions/posts';

const SignUpForm = () => {
    // const [userData, setuserData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const [userData, setuserData] = useState({username: '', email: '', password: ''})
    // const user = useSelector((state) => (currentId ? state.users.find((message) => message._id === currentId) : null));
    const classes = useStyles()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const user = useSelector((state) => state.posts);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:3000/user",
          userData
        ).then((data) => {
          if (data.status === 201) {
            dispatch(getPosts(data.data.username));
            browserHistory.push('UserAccount');
            navigate(`/UserAccount/${data.data.username}`);
          } else {
            console.log("error")
          }
        })
      } catch (err) {
        console.log('error: ', err);
      }
    }

    const clear = () => {
      setuserData({ username: '', email: '', password: '' });
    }

    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">SignUp</Typography>
          <TextField name="username" variant="outlined" label="Username" fullWidth value={userData.username} onChange={(e) => setuserData({ ...userData, username: e.target.value })} />
          <TextField name="email" variant="outlined" label="Email" fullWidth value={userData.email} onChange={(e) => setuserData({ ...userData, email: e.target.value })} />
          <TextField name="password" type="password" variant="outlined" label="Password" fullWidth value={userData.password} onChange={(e) => setuserData({ ...userData, password: e.target.value })} />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" to="/test" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} to='/App' fullWidth>Clear</Button>
        </form>
      </Paper>
    );
}

export default SignUpForm;
