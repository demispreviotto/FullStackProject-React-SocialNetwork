import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/UserContext/UserState";

const Login = () => {
    const { login } = useContext(UserContext);

    const initialValue = {
        email: "",
        password: "",
        message: "",
    }
    const [data, setData] = useState(initialValue);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(data)
            setData({ ...data, message: `Welcome back ${data.email}` })
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            setData({ ...data, message: `Email or password incorrect` })
        }
    };
    return (
        <>
            <h1>Login</h1>
            <div className="form-container">
                <form
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={data.email}
                        id="email"
                        onChange={handleInputChange}
                        required />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        id="password"
                        onChange={handleInputChange}
                        required />
                    <button className='btn primary-btn' type="submit">Login</button>
                </form>
                <p>Not Register? <span><Link to='/register'>here</Link></span></p>
                <p>{data.message}</p>
            </div>
        </>
    )
}

export default Login