import * as api from '../api/index.js';

export const getTickets = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchTickets(id);
        console.log("action movieTicket data: ", data);

        dispatch({ type: 'FETCH_TICKETS', payload: data });

    } catch (error) {
        console.log("movie ticket error: ", error.message);
    }
}
