import { combineReducers } from 'redux';
import movies from './movies.js';
import users from './users.js';
import posts from './posts.js';
import movieTickets from './movieTickets.js';
import buyTicket from './buyTicket.js';
import movie from './movie.js';

export const reducers = combineReducers({ movie, movies, users, posts, movieTickets, buyTicket });
