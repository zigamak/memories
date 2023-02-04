import React from 'react';
import Post from './Post/Post';

import { Grid,  CircularProgress } from '@material-ui/core';
import {useSelector} from 'react-redux';
import useStyles from './styles';
 
const Posts = ()=>{
    const classes = useStyles()
    
    const post = useSelector((state)=>state.posts);

    console.log(posts);
    return (
        <>
            <h1>POST</h1>
            <Post />

            //Inputed post
            <Post />
        </>
    )
}

export default Posts;