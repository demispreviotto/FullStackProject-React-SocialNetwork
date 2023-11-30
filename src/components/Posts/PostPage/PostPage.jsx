import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostContext } from '../../../context/PostContext/PostState';
import Post from '../Post/Post';
import Comments from '../Comments/Comments';
import NewComment from '../Comments/NewComment/NewComment';
import './PostPage.css'

const PostPage = () => {
    const { getById, post } = useContext(PostContext)
    const { postId } = useParams();

    useEffect(() => {
        const fetchdata = async () => {
            try {
                await getById(postId);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        }
        fetchdata()
    }, [post])

    return (
        <>
            {post.commentIds ? (
                <div className='posts-container'>
                    <Post post={post} />
                    <div className='comments-container'>
                        {post.commentIds.length === 0 ? (
                            <p>No comments available.</p>
                        ) : (
                            post.commentIds.map(comment => {
                                return (
                                    <Comments key={comment._id} comment={comment} />
                                );
                            })
                        )}
                    </div>
                    <NewComment postId={post._id} />
                </div>
            )
                : (
                    <p>Post not found</p>)}
        </>
    )
}

export default PostPage