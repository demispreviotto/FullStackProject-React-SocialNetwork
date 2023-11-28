import React from 'react'
import './Home.css'
import Posts from '../Posts/Posts';
import NewPostBtn from '../NewPost/NewPostBtn';
// import { Link } from 'react-router-dom';
// import { VscAdd } from "react-icons/vsc";

const Home = () => {

    const token = localStorage.getItem("token")
    const user = localStorage.getItem("token")

    return (
        <>
            <p>Home</p>
            <Posts />
            <NewPostBtn />
            {/* <button><Link to='/newPost'><VscAdd /></Link></button> */}
        </>
    )
}

export default Home