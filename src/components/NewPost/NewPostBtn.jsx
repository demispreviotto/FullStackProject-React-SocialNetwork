import React from 'react'
import { VscAdd } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom';

const NewPostBtn = () => {
    const navigate = useNavigate();
    return (
        <button className='newPostBtn' onClick={() => navigate('/newPost')}>
            <VscAdd />
        </button>
    )
}

export default NewPostBtn