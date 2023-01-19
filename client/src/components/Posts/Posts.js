import React from 'react';
import Post from './Post/Post';
import {useSelector} from 'react-redux';
import useStyles from './styles';
 
const Posts = ()=>{
    //updated use styles
    const classes = useStyles()
    //Updated useselectors
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