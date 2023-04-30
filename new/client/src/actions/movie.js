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

export const addMovie = (movie) => async (dispatch) => {
    try {
        const { data } = api.addMovie(movie)
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

