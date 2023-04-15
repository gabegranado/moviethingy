import * as api from "../api";

export const buyTicket = (movieId, userId) => async (dispatch) => {
  try {
    const { data } = await api.buyTicket(movieId, userId);
    console.log("buying ticket with: ", movieId, userId);
    dispatch({ type: "BUY_TICKET", payload: data });
  } catch (error) {
    console.log("userid, movieId", movieId, userId);

    console.log("new error");
    console.log(error);
  }
};
