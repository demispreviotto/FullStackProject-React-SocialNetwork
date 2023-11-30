import React, { useContext, useEffect, useState } from 'react'
import { VscBookmark, VscCommentDiscussion, VscHeart, VscHeartFilled } from 'react-icons/vsc'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext/UserState';
import { PostContext } from '../../../context/PostContext/PostState';
import axios from 'axios';

const Post = ({ post }) => {
    const { likePost, unLikePost, getById } = useContext(PostContext);
    const { user } = useContext(UserContext);
    const [likeState, setLikeState] = useState(false)
    const initialCounter = {
        numComments: post.commentIds?.length || 0,
        numLikes: post.likes?.length || 0,
    }
    const [counters, setCounters] = useState(initialCounter)

    const navigate = useNavigate();

    useEffect(() => {
        if (user && post.likes) {
            if (post.likes.includes(user._id)) {
                setLikeState(true)
            }
        } else {
            setLikeState(false)
        }
    }, [])

    const handleLike = async () => {
        if (user && post) {
            try {
                if (!likeState) {
                    await likePost(post._id);
                } else {
                    await unLikePost(post._id);
                }

                const updatedPost = await getById(post._id);
                setLikeState(!likeState);
                setCounters({
                    ...counters,
                    numLikes: updatedPost.likes.length,
                });
            } catch (error) {
                console.error(error);
            }
        }
    }
    const handleBook = () => {
        console.log('push the postId to the saved posts of the logged user')
    }

    if (!post.userId) {
        return 'cargando'
    }
    return (
        <div className='card'>
            <p>" {post.content} "</p>
            <div className="post-footer">
                <div className="interaction-container">
                    <a onClick={handleLike}>{likeState ? <VscHeartFilled /> : <VscHeart />} {counters.numLikes > 99 ? "+99" : counters.numLikes}</a>
                    <a onClick={() => navigate(`/post/${post._id}`)}><VscCommentDiscussion /> {counters.numComments > 99 ? "+99" : counters.numComments}</a>
                    <a onClick={handleBook}><VscBookmark /></a>
                </div>
                <Link to={`/${post.userId._id}`}>- {post.userId.username}</Link>
            </div>
        </div>
    )
}

export default Post