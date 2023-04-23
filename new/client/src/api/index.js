import axios from 'axios';

const url = 'http://localhost:3000/test';

export const fetchPosts = (username) => axios.get(`http://localhost:3000/user/${username}`);
export const getUserData = (username) => { 
    // console.log("index aip", username);
    axios.get(`http://localhost:3000/user/dope22`);
    // , {
        // Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzZkNmZjY2M5YjFmNTVjMDYwZDA2NSIsImVtYWlsIjoiZG9wZUBkb3BlLmNvbXM1MyIsImlhdCI6MTY4MTMzMTI5OX0.NiJCR34jf78DRTqK4xk--WGOXH3GNNIGy1ViE2niTNU"
    // }) 
};
export const fetchTickets = (id) => axios.get(`http://localhost:3000/movieTicket/${id}`);
export const createUser = (newUser) => axios.post('http://localhost:3000/user', newUser);
export const addMovie = (newMovie) => { axios.post('http://localhost:3000/movie', newMovie); };
export const fetchMovies = () => axios.get('http://localhost:3000/movie');
export const buyTicket = (movieId, userId) => axios.post(`http://localhost:3000/movieTicket/${movieId}/${userId}`);
export const fetchMovie = (movieId) => axios.get(`http://localhost:3000/movie/findMovieById/${movieId}`);
export const getSearch = (search) => axios.get(`http://localhost:3000/movie/search/${search}`);
