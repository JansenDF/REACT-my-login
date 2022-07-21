import './style.css'

import { AuthContext } from '../../context/auth'
import { useContext } from 'react'

export const Navbar = () => {

    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="navbar">
            <div className="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/register">cadastro</a></li>
                </ul>
            </div>
            <div className="logout">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}