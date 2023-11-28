import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';
import { VscHeart, VscHeartFilled, VscCommentDiscussion, VscBookmark } from "react-icons/vsc";
import './Posts.css';

const Posts = () => {
    const { getPosts, posts } = useContext(GlobalContext);
    const [like, setLike] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            await getPosts();
        };
        fetchData();
    }, []);

    const liked = () => {
        console.log('Liked')
    }
    const comment = () => {
        console.log('commented')
    }
    const book = () => {
        console.log('booked')
    }
    return (
        <div className='posts-container'>
            {console.log({ posts })}
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map((post) => {
                    return (
                        <div className='card' key={post._id}>
                            <p>" {post.content} "</p>
                            {/* <p> - {post.userId.username}</p> */}
                            <div className="post-footer">
                                <div className="interaction-container">
                                    <a onClick={liked}>{like ? <VscHeartFilled /> : <VscHeart />}</a>
                                    <a onClick={comment}><VscCommentDiscussion /></a>
                                    <a onClick={book}><VscBookmark /></a>
                                </div>
                                <Link to='/'>- {post.userId.username}</Link>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    )
}

export default Posts