import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const initialValue = {
        email: "",
        username: "",
        password: "",
    }
    const [data, setData] = useState(initialValue);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (data.username.length < 3) {
            setMessage("Name must be at least 3 characters");
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
    }, [data]);

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("info form", data);
        console.log(`Soy ${data.username} y mi correo es ${data.email}`);
        setMessage("Formulario enviado con éxito :D ! ! !");
        setTimeout(() => {
            setData(initialValue);
            navigate("/");
        }, 3000);
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
                    <button className='btn primary-btn' type="submit">Register</button>
                </form>
                <p>Already a user? <span><Link to='/Login'>here</Link></span></p>
            </div>
        </>
    )
}

export default Register