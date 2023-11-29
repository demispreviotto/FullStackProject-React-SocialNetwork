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
            {console.log({ posts })}
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map((post) => {
                    return (
                        <Post key={post._id} post={post} />
                        // <div className='card' key={post._id}>
                        //     <p>" {post.content} "</p>
                        //     <div className="post-footer">
                        //         <div className="interaction-container">
                        //             <a onClick={()=>liked(likePost(post._id))}>{likeState ? <VscHeartFilled /> : <VscHeart />} {numLikes > 99 ? "+99" : numLikes}</a>
                        //             <a onClick={comment}><VscCommentDiscussion /> {numComments > 99 ? "+99" : numComments}</a>
                        //             <a onClick={book}><VscBookmark /></a>
                        //         </div>
                        //         <Link to={`/${post.userId._id}`}>- {post.userId.username}</Link>
                        //     </div>
                        // </div>
                    );
                })
            )}
        </div>
    )
}

export default Posts;