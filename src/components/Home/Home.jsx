import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import './Home.css'

const Home = () => {
    const { posts, getPosts } = useContext(GlobalContext);

    useEffect(() => {
        getPosts();
    }, []);
    return (
        <>
            <h1>Home</h1>
            <div>
                {console.log({ posts })}
                {posts.map((post, index) => {
                    return (
                        <div className='card' key={index}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Home