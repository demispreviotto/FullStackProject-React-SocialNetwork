import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { UserContext } from '../../context/UserContext/UserState'

const Navbar = () => {
    const { logout, user } = useContext(UserContext)
    const navigate = useNavigate();
    console.log(user)

    const token = localStorage.getItem("token")

    const handleLogout = async (e) => {
        e.preventDefault()
        console.log('logout click!!')
        try {
            await logout();
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <nav>
                <NavLink to='/'>Home/</NavLink>
                <NavLink to='/about'>About/</NavLink>
                {!token ?
                    (
                        <NavLink to='/login'>Login</NavLink>
                    ) : (
                        <>
                            <NavLink to='/profile'>{user.loggedUser.username}/</NavLink>
                            <NavLink to='/logout' onClick={handleLogout}>Logout</NavLink>
                        </>
                    )
                }
            </nav>

        </>
    )
}

export default Navbar