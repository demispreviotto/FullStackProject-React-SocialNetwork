import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState';
import { Link } from 'react-router-dom';
import NewPostBtn from '../NewPost/NewPostBtn';

const Profile = () => {
    const { getUserInfo, user, logout } = useContext(UserContext);
    useEffect(() => {
        getUserInfo()
    }, [])

    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div>Profile</div>
            <h1>{user.username}</h1>
            <p>{user.email}</p>
            <Link to='/' onClick={logout}>Logout</Link>
            <NewPostBtn />

        </>
    )
}

export default Profile