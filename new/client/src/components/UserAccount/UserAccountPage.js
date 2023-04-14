import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../actions/user';
import { getMovies } from '../../actions/movie';
import { getTickets } from '../../actions/movieTicket';
import { getPosts } from '../../actions/posts';



// import { createUser } from '../../actions/posts';

const UserAccountPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    // const parsed = JSON.parse(JSON.stringify(user))[0];

    var username = ''

    useEffect(() => {
        dispatch(getPosts(username));
    }, [dispatch]);


    for(var key in params){
        if (key === "userName") {
            username = params[key];
        }
    }

    const user = useSelector((state) => state.posts);
    // var movies = [];
    const parsed = JSON.parse(JSON.stringify(user));

    var uId = ''
    for (var key in parsed[0]) {
        if (key === "_id") {
        console.log("key ", key, "thingy ", parsed[0][key]);
        uId = parsed[0][key];
        }
    }

    var m = []
    console.log("parsed shit: ", uId);

    console.log("UserPage user id:outside ", uId);

        useEffect((uId) => {
            if (uId != '') {
            console.log("UserPage user id: ", uId);
            dispatch(getTickets("64381c8d491f9e08063ed261"))
            }
        }, [dispatch]);

        m = useSelector((state) => state.movieTickets);

    console.log("user stuff: ", m);


    // console.log("userstuff hereree " + user);
    return (
        <div>
                    <h1>test: {JSON.stringify(user)}</h1>
                    <h2>movie: {JSON.stringify(m)}</h2>
                    {/* <button onClick={handlesubmit('gabe')}>gabe</button>
                    <button onClick={handlesubmit('cola')}>cola</button> */}

        </div>
        );
}

export default UserAccountPage;