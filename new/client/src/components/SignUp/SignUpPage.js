import React from "react";
import SignUpForm from "./SignUpForm";
import "./signup.css";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        {/* <div className="col-md-4 col-md-offset-4"> */}
        <SignUpForm />
        {/* </div> */}
      </div>
    );
  }
}

export default LoginPage;
