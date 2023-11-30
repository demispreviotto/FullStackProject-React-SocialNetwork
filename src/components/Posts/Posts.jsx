import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import './Posts.css';
import Post from './Post/Post';

const Posts = () => {
    const { getPosts, posts } = useContext(GlobalContext);

    useEffect(() => {
        const fetchData = async () => {
            await getPosts();
        };
        fetchData();
    }, []);
    return (
        <div className='posts-container'>
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map((post) => {
                    return (
                        <Post key={post._id} post={post} />
                    );
                })
            )}
        </div>
    )
}

export default Posts;