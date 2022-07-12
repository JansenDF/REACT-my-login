import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from "../../context/auth"
import { api, getUsers } from '../../services/api'

export const HomePage = () => {

    const { authenticated, logout } = useContext(AuthContext);

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getUsers();
            setUsers(response.data);
            setLoading(false);
        })();
    }, [])

    const handleLogout = () => {
        logout();
    }

    if(loading){
        return(
            <div className="loading">Carregando...</div>
        )
    }
    return (
        <>
            <h1>Home Page</h1>
            <p>{String(authenticated)}</p>
            <button onClick={handleLogout}>Logout</button>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        {user._id} - {user.email}
                    </li>
                ))}
            </ul>
        </>
    )
}