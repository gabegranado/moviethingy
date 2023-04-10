import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// import SnackbarProvider from 'react-simple-snackbar'
import Home from './components/Home/Home';
import Test from './test'
import SignUpPage from './components/SignUp/SignUpPage'
import AdminPage from './components/Admin/AdminPage';

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
            <Link to="/SignUp">SignUp Page</Link>
          </li>
          <li>
            <Link to="/Admin">Admin Page</Link>
          </li>
        </ul>
      </nav>

      {/* 👇️ Wrap your Route components in a Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Admin" element={<AdminPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;