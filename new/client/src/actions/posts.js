import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        console.log("why is this not working?");

        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);
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