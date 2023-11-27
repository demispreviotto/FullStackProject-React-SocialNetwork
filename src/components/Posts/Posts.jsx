import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState';

const Posts = () => {
    const { posts, getPosts } = useContext(GlobalContext);
    // const token = localStorage.getItem("token")

    useEffect(() => {
        const fetchData = async () => {
            await getPosts();
        };
        fetchData();
    }, []);
    return (
        <>
            {console.log({ posts })}
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map((post, index) => {
                    return (
                        <div className='card' key={index}>
                            <p>{console.log(post.userId.username)}</p>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    );
                })
            )}
        </>
    )
}

export default Posts