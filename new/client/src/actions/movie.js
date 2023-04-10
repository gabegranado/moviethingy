import * as api from '../api/index.js';

export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMovies();

    dispatch({ type: 'FETCH_ALL_MOVIES', payload: data });
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
