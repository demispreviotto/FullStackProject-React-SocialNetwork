import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { UserContext } from '../../context/UserContext/UserState'

const Navbar = () => {
    const { user } = useContext(UserContext);
    const username = user ? user.username : '';
    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                {!username ?
                    (
                        <NavLink to='/login'>Login</NavLink>
                    ) : (
                        <>
                            <NavLink to='/profile'>{user.username}</NavLink>
                        </>
                    )
                }
            </nav>

        </>
    )
}

export default Navbar