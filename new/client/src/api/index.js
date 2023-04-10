import axios from 'axios';

const url = 'http://localhost:3000/test';

export const fetchPosts = () => axios.get(url);
export const createUser = (newUser) => { axios.post('http://localhost:3000/user', newUser); };
export const addMovie = (newMovie) => { axios.post('http://localhost:3000/movie', newMovie); };
export const fetchMovies = () => axios.get('http://localhost:3000/movie');
