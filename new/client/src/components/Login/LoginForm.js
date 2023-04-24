import React, { useState } from "react";
import useStyles from "../Form/styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { browserHistory } from "react-router";
import axios, { AxiosError } from "axios";
import { useSignIn } from "react-auth-kit";
import { Cookies } from "react-cookie";
import "./LoginForm.css";
import closed_eye from "../../images/eye-close.png";
// import { createUser } from '../../actions/posts';

const LoginForm = () => {
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const [userData, setuserData] = useState({ identifier: "", password: "" });
  // const user = useSelector((state) => (currentId ? state.users.find((message) => message._id === currentId) : null));
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userData);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:3000/user/login",
        userData
      );
      console.log("usersname", response.data.username);
      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { identifier: response.data.username },
      });
      const username = cookies.get("_auth_state").identifier;
      console.log("COOKKIIES", cookies.get("_auth_state").identifier);
      browserHistory.push("UserAccount");
      navigate(`/UserAccount/${username}`);
      // console.log("hreeee", response.data.identifier);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const clear = () => {
    // setCurrentId(0);
    setuserData({ identifier: "", password: "" });
  };

  return (
    <div className="signinform">
      <div className="Title">Login</div>
      <form
        // action="#"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="signininfo">
          <div className="input-box">
            <input
              type="text"
              placeholder="User"
              value={userData.identifier}
              onChange={(e) =>
                setuserData({ ...userData, identifier: e.target.value })
              }
            ></input>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={userData.password}
              onChange={(e) =>
                setuserData({ ...userData, password: e.target.value })
              }
            ></input>
            <img src={closed_eye}></img>
          </div>
          <div className="button">
            <input type="submit" value="Signin" to="/test"></input>
          </div>
          <div className="button">
            <input
              type="submit"
              value="Clear"
              onClick={clear}
              to="/App"
            ></input>
          </div>
        </div>
      </form>
    </div>
    //   <Paper className={classes.paper}>
    //   <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
    //     <Typography variant="h6">Login</Typography>
    //     <TextField name="identifier" variant="outlined" label="Identifier" fullWidth value={userData.identifier} onChange={(e) => setuserData({ ...userData, identifier: e.target.value })} />
    //     <TextField name="password" type="password" variant="outlined" label="Password" fullWidth value={userData.password} onChange={(e) => setuserData({ ...userData, password: e.target.value })} />
    //     <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" to="/test" fullWidth>Submit</Button>
    //     <Button variant="contained" color="secondary" size="small" onClick={clear} to='/App' fullWidth>Clear</Button>
    //   </form>
    // </Paper>
  );
};

export default LoginForm;
