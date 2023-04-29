import React from "react";
import SignUpForm from "./SignUpForm";
// import "./SignUpForm.css";

class SignUpPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignUpForm />
          <li className="nav_item">
        <a href="/Login" className="link">
          Already have an account? click here: Login
        </a>
      </li>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
