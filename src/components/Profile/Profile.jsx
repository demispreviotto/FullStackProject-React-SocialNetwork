import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState';
import { Link } from 'react-router-dom';
import NewPostBtn from '../Posts/NewPost/NewPostBtn';
import Post from '../Posts/Post/Post';

const Profile = () => {
    const { getUserInfo, user, logout } = useContext(UserContext);

    useEffect(() => {
        const fetch = async () => {
            await getUserInfo();
        }
        fetch()
    }, [])

    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <h1>{user.username}</h1>
            <p>{user.email}</p>
            <Link to='/' onClick={logout}>Logout</Link>
            <NewPostBtn />
            <div className='posts-container'>
                {user.postIds.length === 0 ? (
                    <p>No posts available.</p>
                ) : (
                    user.postIds.map((post) => {
                        return (
                            <Post key={post._id} post={post} />
                        );
                    })
                )}
            </div>

        </>
    )
}

export default Profile