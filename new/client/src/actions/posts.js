import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        console.log(data);

        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = (post) => async (dispatch) => {
    try {
        const { data } = api.createUser(post)
        console.log('data');
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log("new error");
        console.log(error);
    }
}