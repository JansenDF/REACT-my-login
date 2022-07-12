import React, { useContext } from 'react'
import { AuthContext } from "../../context/auth"

export const HomePage = () => {

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    return (
        <>
            <h1>Home Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}