import axios from 'axios';

const url = 'http://localhost:3000/api/test';

export const fetchPosts = () => axios.get(url);
export const createUser = (newPost) => { 
    console.log(newPost);
    axios.post('http://localhost:3000/api/createUsers', newPost)
};