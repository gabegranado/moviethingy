import * as api from '../api/index.js';

export const getUserData = (username) => async (dispatch) => {
    try {
      const { data } = await api.getUserData(username);
      console.log("new stupid data", data);
      dispatch({ type: 'FETCH_USER_DATA', payload: data });
    } catch (error) {
      console.log("error: ", error.message);
    }
  };
