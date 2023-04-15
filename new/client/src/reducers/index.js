import { combineReducers } from 'redux';
import movies from './movies.js';
import users from './users.js';
import posts from './posts.js';
import movieTickets from './movieTickets.js';
import buyTicket from './buyTicket.js';

export const reducers = combineReducers({ movies, users, posts, movieTickets, buyTicket });
