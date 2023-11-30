import React, { useContext, useEffect } from 'react'
import './Home.css'
import { GlobalContext } from '../../context/GlobalState';

import Posts from '../Posts/Posts';
import NewPostBtn from '../Posts/NewPost/NewPostBtn';

const Home = () => {
    return (
        <>
            <Posts />
            <NewPostBtn />
        </>
    )
}

export default Home