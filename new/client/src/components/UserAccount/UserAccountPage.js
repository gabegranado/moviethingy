import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../actions/user';
import { getPosts, getTicket } from '../../actions/posts';
import UserMovies from './UserMovies';


// import { createUser } from '../../actions/posts';

const UserAccountPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    // const parsed = JSON.parse(JSON.stringify(user))[0];

    var username = ''
    for(var key in params){
        if (key === "userName") {
            username = params[key];
        }
    }

    useEffect(() => {
        dispatch(getPosts(username));
    }, [dispatch]);
    const user = useSelector((state) => state.posts);
    console.log("useEffect user ", user);
    // var id = ''
    // const parsed = JSON.parse(JSON.stringify(user))
    // if (parsed[0]){
    //     console.log("TYPE OF ", parsed[0]._id);
    //     id = parsed[0]._id;

        // useEffect(() => {
        //     dispatch(getTicket(id));
        // }, [dispatch]);
    // }
    // for(var key in user[0]){
    //     console.log("test", key, user[key]);
    // }

    console.log("user stuff: ", username);

    // console.log("userstuff hereree " + user);
    return (
        <h1>test</h1>
        // <UserMovies/>
        );
}

export default UserAccountPage;