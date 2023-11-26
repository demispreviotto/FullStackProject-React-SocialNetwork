import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { UserContext } from '../../context/UserContext/UserState'

const Navbar = () => {
    const { logout } = useContext(UserContext)
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault()
        console.log('logout click!!')
        logout();
        navigate('/')
    }

    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                {!localStorage.getItem("token") ?
                    (
                        <NavLink to='/login'>Login</NavLink>
                    ) : (
                        <>
                            <NavLink to='/profile'>MyAccount</NavLink>
                            <NavLink to='/logout' onClick={handleLogout}>Logout</NavLink>
                        </>
                    )
                }
            </nav>

        </>
    )
}

export default Navbar