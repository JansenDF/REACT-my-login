import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom'

import { api, createSession, registerUser } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const recoveryUser = localStorage.getItem("user");
        const token = localStorage.getItem("token")

        if(recoveryUser && token){
            setUser(JSON.parse(recoveryUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }

        setLoading(false);
    }, [])
    
    const login = async (email, password) => {

        const response = await createSession(email, password);

        console.log('login', response.data)

        const loggedUser = response.data.user;
        console.log(loggedUser)
        const token = response.data.token;
        console.log(token)

        localStorage.setItem("user", JSON.stringify(loggedUser))
        localStorage.setItem("token", token)

        api.defaults.headers.Authorization = `Bearer ${token}`;
        
        setUser(loggedUser)
        navigate("/dashboard")
    }
    const logout = () => {
        console.log('logout')

        localStorage.removeItem("user")
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = null
        
        setUser(null);
        navigate("/")
    }
    const register = async (name, username, email, password) => {

        console.log(name, username, email, password)
        const response = await registerUser(name, username, email, password);

        console.log('register', response.data)

        navigate("/")
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}