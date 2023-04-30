import * as api from '../api/index.js';

export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMovies();
    console.log('movie payload', data);
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

export const getSearch = (search) => async (dispatch) => {
  try {
    const { data } = api.getSearch(search)
    dispatch({ type: 'FETCH_SEARCH_MOVIES', payload: data })
} catch (error) {
    console.log(error);
}
}
