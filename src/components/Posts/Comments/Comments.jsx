import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/UserContext/UserState';
import { PostContext } from '../../../context/PostContext/PostState';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Comments = (comment) => {
    const { likePost, unLikePost, post } = useContext(PostContext);
    const { user } = useContext(UserContext);
    const [likeState, setLikeState] = useState(false)
    const initialCounter = {
        numLikes: comment.comment.likes.length,
    }
    const [counters, setCounters] = useState(initialCounter)

    useEffect(() => {
        if (user) {
            if (comment.comment.likes?.includes(user._id)) {
                setLikeState(true)
            }
        } else {
            setLikeState(false)
        }
    }, [])

    const handleLike = async () => {
        if (user) {
            try {
                if (!likeState) {
                    await likePost(post._id);
                } else {
                    await unLikePost(post._id);
                }

                const updatedPost = await await getById(post._Id);
                setLikeState(!likeState);
                setCounters({
                    ...counters,
                    numLikes: updatedPost.data.likes.length,
                });
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <div className='card'>
            <p>"{comment.comment.text} " </p>
            <div className="post-footer">
                <div className="interaction-container">
                    <a onClick={handleLike}>{likeState ? <VscHeartFilled /> : <VscHeart />} {counters.numLikes > 99 ? "+99" : counters.numLikes}</a>
                </div>
                <Link to={`/${comment.comment.userId._id}`}>- {comment.comment.userId.username}</Link>
            </div>
        </div>

    )
}

export default Comments