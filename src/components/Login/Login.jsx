import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/UserContext/UserState";

const Login = () => {
    const { login } = useContext(UserContext);

    const initialValue = {
        email: "",
        password: "",
    }
    const [data, setData] = useState(initialValue);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(data)
        console.log(data)
        // setTimeout(() => {
        //     setData(initialValue);
        //     navigate("/");
        // }, 3000);
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
            </div>
        </>
    )
}

export default Login