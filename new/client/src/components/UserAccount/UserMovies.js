import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../actions/user';
import { getPosts, getTicket } from '../../actions/posts';



// import { createUser } from '../../actions/posts';

const UserMovies = () => {
    const params = useParams();
    const dispatch = useDispatch();
    // const parsed = JSON.parse(JSON.stringify(user))[0];

    const {user} = useSelector((state) => state.posts);
    var parsed;
    console.log('user user:', user);
    if (user) {
        var id = ''
        parsed = JSON.parse(JSON.stringify(user))
    }

    if (parsed){
        console.log("TYPE OF ", parsed[0]._id);
        id = parsed[0]._id;

        useEffect(() => {
            dispatch(getTicket(id));
        }, [dispatch]);
    }
    // for(var key in user[0]){
    //     console.log("test", key, user[key]);
    // }

    // console.log("user stuff: ", username);

    // console.log("userstuff hereree " + user);
    return (
        <h1>test: {JSON.stringify(user)}</h1>
        );
}

export default UserMovies;