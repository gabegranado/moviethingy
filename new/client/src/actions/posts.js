import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        console.log("why is this not working?");

        dispatch({ type: 'FETCH_ALL', payload: data });

        const { movieData } = await api.fetchTicket(data[0]._id);

        dispatch({ type: 'FETCH_TICKET', payload: movieData})
        // getTicket(data[0]._id);

    } catch (error) {
        console.log(error.message);
    }
}

export const getTicket = (userId) => async (dispatch) => {
    try {
        const { data } = await api.fetchTicket(userId);
        console.log('getting ticket', data);

        dispatch({ type: 'FETCH_TICKET', payload: data})
    } catch (error) {
        console.log("error: ", error.message);
    }
}

export const createUser = (post) => async (dispatch) => {
    try {
        const { data } = await api.createUser(post)
        
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}