import React, { useContext, useState } from 'react'
import { PostContext } from '../../../context/PostContext/PostState'
import './NewPost.css'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext/UserState';
const NewPost = () => {
    const { newPost } = useContext(PostContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const initialValue = {
        content: '',
    }
    const [data, setData] = useState(initialValue)
    const [message, setMessage] = useState('')

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user) {
            await newPost(data)
            navigate('/')
        } else {
            setMessage(`<p>Not LoggedIn ? <span><Link to='/register'>here</Link></span></p>`)
        }
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
                {message}
            </div>
        </>
    )
}

export default NewPost