import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../actions/user';
import { getPosts } from '../../actions/posts';



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



    console.log("user stuff: ", username);

    // console.log("userstuff hereree " + user);
    return (
        <h1>test: {JSON.stringify(user)}</h1>
        );
}

export default UserAccountPage;