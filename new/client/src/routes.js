import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import test from './test';
import SignUpPage from './components/SignUp/SignUpPage';
import AdminPage from './components/Admin/AdminPage';
import Home from './components/Home/Home';
import LoginPage from './components/Login/LoginPage'
import UserAccountPage from './components/UserAccount/UserAccountPage'
import MoviesDetails from './components/Movies/MoviesDetails';
import BrowseMoviesPageNowPlaying from './components/BrowseMovies/BrowseMoviesPageNowPlaying';
import BrowseMoviesPageUpcoming from './components/BrowseMovies/BrowseMoviesPageUpcoming';
import AdminLoginPage from './components/AdminLogin/AdminLoginPage';
import SearchPage from './components/SearchPage/SearchPage';
// import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home}/>
    <Route path='test' component={test}/>
    <Route path="signUp" component={SignUpPage} />
    <Route path="admin" component={AdminPage}/>
    <Route path="adminLogin" component={AdminLoginPage} />
    <Route path="userAccount" component={UserAccountPage}/>
    <Route path="userAccount/:userName" component={UserAccountPage}/>
    <Route path="movieDetails/:movieId" component={MoviesDetails}/>
    <Route path="login" component={LoginPage} />
    <Route path="catelog" component={BrowseMoviesPageNowPlaying} />
    <Route path="catelogUpcoming" component={BrowseMoviesPageUpcoming} />
    <Route path="search/:movieTitle" component={SearchPage} />
  </Route>
)