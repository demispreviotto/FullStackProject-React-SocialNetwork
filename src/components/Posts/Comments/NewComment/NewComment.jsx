import React, { useContext, useState } from 'react'
import { UserContext } from '../../../../context/UserContext/UserState';
import { CommentContext } from '../../../../context/CommentsContext/CommentsState';

const NewComment = (postId) => {

    const { newComment } = useContext(CommentContext);
    const { user } = useContext(UserContext);
    const initialValue = {
        text: '',
    }
    const [data, setData] = useState(initialValue)

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user) {
            await newComment(data, postId.postId)
            setData(initialValue)
        } else {
            setMessage(`<p>Not LoggedIn ? <span><Link to='/register'>here</Link></span></p>`)
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <textarea
                    id='text'
                    name='text'
                    value={data.text}
                    onChange={handleInputChange}
                    maxLength={255} rows={10} cols={50}
                />
                <p className='char-counter'>{data.text.length}/255</p>
                <button type='submit'>Comment</button>
            </form>
        </div>
    )
}

export default NewComment