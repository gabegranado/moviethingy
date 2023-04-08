import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// import SnackbarProvider from 'react-simple-snackbar'
import Home from './components/Home/Home';
import Test from './test'
import LoginPage from './components/login/LoginPage'

function App() {

//   const user = JSON.parse(localStorage.getItem('profile'))

  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Test">Test</Link>
          </li>
          <li>
            <Link to="/Login">Login Page</Link>
          </li>
        </ul>
      </nav>

      {/* 👇️ Wrap your Route components in a Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;