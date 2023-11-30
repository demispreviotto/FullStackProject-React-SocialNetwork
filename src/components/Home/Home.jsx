import React from 'react'
import './Home.css'
import Posts from '../Posts/Posts';
import NewPostBtn from '../Posts/NewPost/NewPostBtn';

const Home = () => {

    const token = localStorage.getItem("token")
    const user = localStorage.getItem("token")

    return (
        <>
            <p>Home</p>
            <Posts />
            <NewPostBtn />
        </>
    )
}

export default Home