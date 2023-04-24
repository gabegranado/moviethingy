import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import SnackbarProvider from 'react-simple-snackbar'
import { useState } from "react";
import "../src/App.css";
import Home from './components/Home/Home';
import Test from './test'
import SignUpPage from './components/SignUp/SignUpPage'
import AdminPage from './components/Admin/AdminPage';
import LoginPage from './components/Login/LoginPage';
import UserAccountPage from './components/UserAccount/UserAccountPage';
import MoviesDetails from './components/Movies/MoviesDetails';
import BrowseMoviesPageNowPlaying from './components/BrowseMovies/BrowseMoviesPageNowPlaying';
import BrowseMoviesPageUpcoming from './components/BrowseMovies/BrowseMoviesPageUpcoming';

function App() {
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
        {/* <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Test">Test</Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp Page</Link>
          </li>
          <li>
          <Link to="/Login">Login Page</Link>
          </li>
          <li>
          <Link to="/UserAccount">Account</Link>
          </li>
          <li>
            <Link to="/Admin">Admin Page</Link>
          </li>
          <li>
            <Link to="/Catelog">Catelog</Link>
          </li>
        </ul>
      </nav> */}
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
                {/* {<Searchbar />} */}
              </a>
            </li>
            {/* <li className="nav__item">
              <a href="/Home" className="nav__link">
                Home
              </a>
            </li> */}
            <li className="nav__item">
              <a href="/Test" className="nav__link">
                Test
              </a>
            </li>
            <li className="nav__item">
              <a href="/Login" className="nav__link">
                Login
              </a>
            </li>
            <li className="nav__item">
              <a href="/Signup" className="nav__link">
                Signup
              </a>
            </li>
            <li className="nav__item">
              <a href="/Admin" className="nav__link">
                Admin
              </a>
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
        <Route path="/UserAccount" element={<UserAccountPage />}/>
        <Route path="/UserAccount/:userName" element={<UserAccountPage />}/>
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="movieDetails/:movieId" element={<MoviesDetails />}/>
        <Route path="/Catelog" element={<BrowseMoviesPageNowPlaying />} />
        <Route path="/CatelogUpcoming" element={<BrowseMoviesPageUpcoming />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
