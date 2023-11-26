import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState';

const Profile = () => {
    const { getUserInfo, user } = useContext(UserContext);
    useEffect(() => {
        getUserInfo()
    }, [])

    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div>Profile</div>
            <h1>{user.loggedUser.username}</h1>
            <p>{user.loggedUser.email}</p>
        </>
    )
}

export default Profile