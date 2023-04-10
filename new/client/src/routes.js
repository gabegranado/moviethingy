import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import test from './test';
import SignUpPage from './components/SignUp/SignUpPage';
import AdminPage from './components/Admin/AdminPage';
import Home from './components/Home/Home';
// import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home}/>
    <Route path='test' component={test}/>
    <Route path="signUp" component={SignUpPage} />
    <Route path="admin" component={AdminPage}/>
  </Route>
)