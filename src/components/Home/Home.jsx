import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import './Home.css'
import { UserContext } from '../../context/UserContext/UserState';

const Home = () => {
    const { posts, getPosts } = useContext(GlobalContext);
    const { user, getUserInfo } = useContext(UserContext)

    const token = localStorage.getItem("token")

    useEffect(() => {
        const fetchData = async () => {
            await getPosts();

            if (token && !user) {
                await getUserInfo();
                console.log(user);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <h1>Home</h1>
            <div>
                {console.log({ posts })}
                {posts.length === 0 ? (
                    <p>No posts available.</p>
                ) : (
                    posts.map((post, index) => {
                        return (
                            <div className='card' key={index}>
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                            </div>
                        );
                    })
                )}
            </div>
        </>
    )
}

export default Home