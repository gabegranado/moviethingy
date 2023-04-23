import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { createUser } from "../../actions/posts";

const Form = () => {
  // const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
  const [postData, setPostData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createUser(postData));
  };

  const clear = () => {};

    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">SignUp</Typography>
          <TextField name="username" variant="outlined" label="Username" fullWidth value={postData.username} onChange={(e) => setPostData({ ...postData, username: e.target.value })} />
          <TextField name="email" variant="outlined" label="Email" fullWidth value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
          <TextField name="password" type="password" variant="outlined" label="Password" fullWidth value={postData.password} onChange={(e) => setPostData({ ...postData, password: e.target.value })} />
          {/* <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} /> */}
          {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div> */}
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
        
      </Paper>
    );
}

export default Form;
