import React, { useContext, useEffect } from 'react'
// import { GlobalContext } from '../../context/GlobalState';
import './Home.css'
import { UserContext } from '../../context/UserContext/UserState';
import Posts from '../Posts/Posts';

const Home = () => {
    const { user, getUserInfo } = useContext(UserContext)

    const token = localStorage.getItem("token")

    useEffect(() => {
        const fetchData = async () => {
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
            <Posts />
        </>
    )
}

export default Home