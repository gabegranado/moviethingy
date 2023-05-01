import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from "react-cookie";
import Cookies from 'js-cookie';

const NavLoginOrSignUp = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.posts);
  console.log("USER::", user)

  if(!Cookies.get("_auth_state")) {
      return (
      <li className="nav__item"> 
      <a href="/Login" className="nav__link">Login/</a>
      <li className="nav_item">
      <a href="/Signup" className="nav__link">
        Signup
      </a>
      </li>
    </li>
      );
  }
  return;

};

export default NavLoginOrSignUp;
