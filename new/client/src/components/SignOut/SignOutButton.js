import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../actions/posts";
import { clearTickets } from "../../actions/movieTicket";
import { useCookies } from "react-cookie";

const signOutButton = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    // setCookie('test', 'test', [])
    removeCookie("_auth_state");
    removeCookie("_auth_storage");
    removeCookie("_auth_type");
    removeCookie("_auth");
    dispatch(logOutUser());
    dispatch(clearTickets());
    navigate("/");
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default signOutButton;
