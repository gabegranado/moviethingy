import { combineReducers } from 'redux';
import movies from './movies.js';
import users from './users.js';
import posts from './posts.js';
console.log('testtest');

export const reducers = combineReducers({ movies, users, posts });
