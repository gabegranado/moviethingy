import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          < LoginForm />
          <li className="nav_item">
        <a href="/Signup" className="link">
          Need an account? click here: Signup
        </a>
      </li>
        </div>
      </div>
    );
  }
}

export default LoginPage;