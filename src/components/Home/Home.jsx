import React, { useContext, useEffect } from 'react'
import './Home.css'
import { GlobalContext } from '../../context/GlobalState';

import Posts from '../Posts/Posts';
import NewPostBtn from '../Posts/NewPost/NewPostBtn';

const Home = () => {
    const { getPosts } = useContext(GlobalContext);

    const token = localStorage.getItem("token")
    const user = localStorage.getItem("token")
    useEffect(() => {
        const fetchData = async () => {
            await getPosts();
        };
        fetchData();
    }, []);
    return (
        <>
            {/* <p>Home</p> */}
            <Posts />
            <NewPostBtn />
        </>
    )
}

export default Home