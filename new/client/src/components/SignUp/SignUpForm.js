import React, { useState } from "react";
import useStyles from "../Form/styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { browserHistory } from "react-router";

import { createUser } from "../../actions/posts";

const SignUpForm = () => {
  // const [userData, setuserData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // const user = useSelector((state) => (currentId ? state.users.find((message) => message._id === currentId) : null));
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (post) setPostData(post);
  // }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
    clear();
    browserHistory.push("Home");
    navigate("/Home");
  };

  const clear = () => {
    // setCurrentId(0);
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
        <Typography variant="h6">SignUp</Typography>
        <TextField
          name="username"
          variant="outlined"
          label="User"
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
        {/* <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={userData.tags} onChange={(e) => setuserData({ ...userData, tags: e.target.value.split(',') })} /> */}
        {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setuserData({ ...userData, selectedFile: base64 })} /></div> */}
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

export default SignUpForm;
// bad word
