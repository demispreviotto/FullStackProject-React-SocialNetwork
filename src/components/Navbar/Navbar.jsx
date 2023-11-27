import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { UserContext } from '../../context/UserContext/UserState'

const Navbar = () => {
    const { logout, user } = useContext(UserContext)
    const navigate = useNavigate();
    console.log(user)

    const handleLogout = (e) => {
        e.preventDefault()
        console.log('logout click!!')
        logout();
        navigate('/')
    }

    return (
        <>
            <nav>
                <NavLink to='/'>Home/</NavLink>
                <NavLink to='/about'>About/</NavLink>
                {user ?
                    (
                        <>
                            <NavLink to='/profile'>{user.loggedUser.username}/</NavLink>
                            <NavLink to='/logout' onClick={handleLogout}>Logout</NavLink>
                        </>
                    ) : (
                        <NavLink to='/login'>Login</NavLink>
                    )
                }
            </nav>

        </>
    )
}

export default Navbar