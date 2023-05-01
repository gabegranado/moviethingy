import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from "../../actions/posts";
import { clearTickets } from "../../actions/movieTicket";
import { useCookies } from "react-cookie";
import Cookies from 'js-cookie';

const signOutButton = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.posts);

  const handleSignOut = () => {
    // setCookie('test', 'test', [])
    // removeCookie("_auth_state");
    // removeCookie("_auth_storage");
    // removeCookie("_auth_type");
    // removeCookie("_auth");
    Cookies.remove("_auth_state")
    dispatch(logOutUser());
    dispatch(clearTickets());
    navigate("/");
  };

  if(Cookies.get("_auth_state")) {
      return (
  <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
  );
  }
  return;

};

export default signOutButton;
