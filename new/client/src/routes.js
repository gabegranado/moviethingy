import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import test from './test';
// import Greetings from './components/Greetings';
// import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
// import NewEventPage from './components/events/NewEventPage';

// import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <Route path='test' component={test}/>
    {/* <Route path="/" component={App} /> */}
    {/* <Route path="signup" component={SignupPage} /> */}
    <Route path="login" component={LoginPage} />
    {/* <Route path="new-event" component={requireAuth(NewEventPage)} /> */}
  </Route>
)