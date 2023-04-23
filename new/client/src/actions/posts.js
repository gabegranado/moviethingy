import * as api from '../api/index.js';

export const getPosts = (username) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(username);
        console.log(data);

        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = (post) => async (dispatch) => {
    try {
        const { data } = await api.createUser(post)
        console.log('data', data);
        dispatch({ type: 'CREATE', payload: data }).then((data) => {
            console.log('test');
        })
    } catch (error) {
        console.log("new error");
        console.log(error);
    }
}

export const logOutUser = () => async (dispatch) => {
    try {
        dispatch({ type: 'LOG_OUT' })
    } catch (error) {
        console.log("new error");
        console.log(error);
    }
}