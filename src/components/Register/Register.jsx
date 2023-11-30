import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';

const Register = () => {
    const { register } = useContext(UserContext);

    const initialValue = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: "",
    }

    const [data, setData] = useState(initialValue);

    // const navigate = useNavigate();

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (data.password === data.confirmPassword) {
                await register(data);
                setData({ ...data, message: `Waiting for confirmation. An email was send to your email account` })
                // setTimeout(() => {
                //     navigate('/');
                // }, 3000);
            } else {
                setData({ ...data, message: `Password is not the same` })
            }
        } catch (error) {
            setData({ ...data, message: [error.response?.data.message || "Registration failed."] })
        }
    };

    return (
        <>
            <h1>Register</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={data.email} id="email" onChange={handleInputChange} />
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={data.username} id="username" onChange={handleInputChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={data.password} id="password" onChange={handleInputChange} />
                    <label htmlFor="rep-password">Confirm Password</label>
                    <input type="password" name="confirmPassword" value={data.confirmPassword} id="confirmPassword" onChange={handleInputChange} />
                    <button className='btn primary-btn' type="submit">Register</button>
                </form>
                <p>Already a user? <span><Link to='/Login'>here</Link></span></p>
                <p>{data.message}</p>
            </div>
        </>
    )
}

export default Register