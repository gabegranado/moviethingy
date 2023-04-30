import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
// import SnackbarProvider from 'react-simple-snackbar'
import { useState } from "react";
import "../src/App.css";
import Home from "./components/Home/Home";
import Test from "./test";
import SignUpPage from "./components/SignUp/SignUpPage";
import AdminPage from "./components/Admin/AdminPage";
import LoginPage from "./components/Login/LoginPage";
import UserAccountPage from "./components/UserAccount/UserAccountPage";
import MoviesDetails from "./components/Movies/MoviesDetails";
import BrowseMoviesPageNowPlaying from "./components/BrowseMovies/BrowseMoviesPageNowPlaying";
import BrowseMoviesPageUpcoming from "./components/BrowseMovies/BrowseMoviesPageUpcoming";
import AdminLoginPage from "./components/AdminLogin/AdminLoginPage";
import SearchPage from "./components/SearchPage/SearchPage";
import { useSignOut } from "react-auth-kit";
import { useDispatch, useSelector } from "react-redux";
import SignOutButton from "./components/SignOut/SignOutButton";
import { getMovie } from "./actions/movie";
import Cookies from 'js-cookie';
import NavLoginOrSignUp from './NavLoginOrSignUp';
import Searchbar from './components/SearchBar/Search';
import  { RequireAuth } from 'react-auth-kit';

function App() {
  const user = Cookies.get('_auth_state');
  var username = ""

  if (user) {
  for (var key in JSON.parse(user)) {
    if (key == 'identifier') {
      username = JSON.parse(user)[key]
    }
  }
}
  // const cookies = new Cookies();

  // const username = cookies.get('_auth_state').identifier

  //   const user = JSON.parse(localStorage.getItem('profile'))
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <Router>
      <div>
        <nav className="nav">
          <a href="/Home" className="nav__brand">
            {/* Casmiro's Cinema's */}
            <img
              className="pic"
              src={require("../src/images/Logo_black.jpg")}
            ></img>
          </a>
          <ul className={active}>
            <li className="search">
              <a href="#" className="nav__link">
                {<Searchbar />}
              </a>
            </li>
            {/* <li className="nav__item">
              <a href="/Home" className="nav__link">
                Home
              </a>
            </li> */}
            <li className="nav__item">
              <a href="/Catelog" className="nav__link">
                Catelog
              </a>
            </li>
            <NavLoginOrSignUp/>
            <li className="nav__item">
              <a href="/Admin" className="nav__link">
                Admin
              </a>
            </li>
            <li className="nav__item">
              <a href={`/UserAccount/${username}`} className="nav__link">
                Account
              </a>
            </li>
            <li className="nav__item">
              <SignOutButton />
            </li>
          </ul>
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/UserAccount" element={<UserAccountPage />} />
          <Route path="/UserAccount/:userName" element={<UserAccountPage />} />
          <Route path="/Admin" element={ <RequireAuth loginPath="/AdminLogin">
          <AdminPage />
          </RequireAuth>
          } />
          <Route path="/AdminLogin" element={<AdminLoginPage />} />
          <Route path="movieDetails/:movieId" element={<MoviesDetails />} />
          <Route path="/Catelog" element={<BrowseMoviesPageNowPlaying />} />
          <Route
            path="/CatelogUpcoming"
            element={<BrowseMoviesPageUpcoming />}
          />
          <Route path="/Search/:movieTitle" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
