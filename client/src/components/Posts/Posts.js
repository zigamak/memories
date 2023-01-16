import React from 'react';
import Post from './Post/Post';
import {useSelector} from 'react-redux';
import useStyles from './styles';
 
const Posts = ()=>{
    //functions for UseStyles 
    const classes = useStyles();
    //Function for Useselectors
    const post = useSelector((state)=>state.posts);

    console.log(posts);
    return (
        <>
            <h1>POST</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts;