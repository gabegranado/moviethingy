import * as api from '../api/index.js';

export const getMovie = (movieId) => async (dispatch) => {
  try {
    const { data } = await api.fetchMovie(movieId);
    console.log('FETCH_MOVIE', data);
    dispatch({ type: 'FETCH_MOVIE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};