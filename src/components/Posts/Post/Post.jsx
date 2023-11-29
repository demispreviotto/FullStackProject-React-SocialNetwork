import React, { useContext, useEffect, useState } from 'react'
import { VscBookmark, VscCommentDiscussion, VscHeart, VscHeartFilled } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext/UserState';
import { PostContext } from '../../../context/PostContext/PostState';

const Post = ({ post }) => {
    const { likePost } = useContext(PostContext);
    const { token, user } = useContext(UserContext);
    const [likeState, setLikeState] = useState(false)

    const numComments = post.commentIds.length
    const numLikes = post.likes.length

    useEffect(() => {
        if (user) {
            if (post.likes.includes(user._id)) {
                setLikeState(true)
            }
        } else {
            setLikeState(false)
        }
    }, [post.likes, user])

    const handleLike = () => {
        if (user) {
            if (!likeState) {
                likePost(post._id)
                console.log('push userId to the like array and push the userId to the LikedPost of the logged user')
                setLikeState(true)
            } else {
                console.log("unlike")
                setLikeState(false)
            }
        }
    }
    useEffect(() => {
        if (user) {
            post.likes.includes(user._id) ? setLikeState(true) : setLikeState(false);
        }
    }, [post, user]);

    const comment = () => {
        console.log('go to post and load the comments')
    }
    const handleBook = () => {
        console.log('push the postId to the saved posts of the logged user')
    }

    return (
        <div className='card'>
            <p>" {post.content} "</p>
            <div className="post-footer">
                <div className="interaction-container">
                    <a onClick={handleLike}>{likeState ? <VscHeartFilled /> : <VscHeart />} {numLikes > 99 ? "+99" : numLikes}</a>
                    <a onClick={comment}><VscCommentDiscussion /> {numComments > 99 ? "+99" : numComments}</a>
                    <a onClick={handleBook}><VscBookmark /></a>
                </div>
                <Link to={`/${post.userId._id}`}>- {post.userId.username}</Link>
            </div>
        </div>
    )
}

export default Post