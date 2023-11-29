import React, { useContext, useState } from 'react'
import { PostContext } from '../../context/PostContext/PostState'
import './NewPost.css'
import { useNavigate } from 'react-router-dom';
const NewPost = () => {
    const { newPost } = useContext(PostContext);
    const navigate = useNavigate();
    const initialValue = {
        content: '',
    }
    const [data, setData] = useState(initialValue)

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        newPost(data)
        navigate('/')
    }

    return (
        <>
            <p>NewPost</p>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <textarea
                        id='content'
                        name='content'
                        value={data.content}
                        onChange={handleInputChange}
                        maxLength={255} rows={10} cols={50}
                    />
                    <p className='char-counter'>{data.content.length}/255</p>
                    <button type='submit'>Post</button>
                </form>
            </div>
        </>
    )
}

export default NewPost