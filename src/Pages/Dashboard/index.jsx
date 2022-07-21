import React, { useState, useEffect } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar';
import { api, getUsers } from '../../services/api'

import './style.css'

export const Dashboard = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getUsers();
            setUsers(response.data.data);
            setLoading(false);
        })();
    }, [])

    if(loading){
        return(
            <div className="loading">Carregando...</div>
        )
    }
    return (
        <>
            <Navbar />
            <div id="dashboard">
                <h1>Dashboard</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.name}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}