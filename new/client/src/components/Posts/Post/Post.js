import React from 'react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';



const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <h1 className={classes.something}>{post.testData}</h1>
    );
}

export default Post;