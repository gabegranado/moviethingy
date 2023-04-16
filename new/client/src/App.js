import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// import SnackbarProvider from 'react-simple-snackbar'
import Home from './components/Home/Home';
import Test from './test'
import SignUpPage from './components/SignUp/SignUpPage'
import AdminPage from './components/Admin/AdminPage';
import LoginPage from './components/Login/LoginPage';
import UserAccountPage from './components/UserAccount/UserAccountPage';
import MoviesDetails from './components/Movies/MoviesDetails';

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import moviePoster from './images/moviethingy.png';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("more test");
        dispatch(getPosts());
    }, [dispatch]);

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
          <Link to="/Login">Login Page</Link>
          </li>
          <li>
          <Link to="/UserAccount">Account</Link>
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
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/UserAccount" element={<UserAccountPage />}/>
        <Route path="/UserAccount/:userName" element={<UserAccountPage />}/>
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="movieDetails/:movieId" element={<MoviesDetails />}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;