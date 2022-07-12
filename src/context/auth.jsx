import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const recoveryUser = localStorage.getItem("user");

        if(recoveryUser){
            setUser(JSON.parse(recoveryUser));
        }

        setLoading(false);
    }, [])
    
    const login = (email, password) => {
        console.log('login auth', {email, password})

        const loggedUser = {
            id: '123',
            email
        }

        localStorage.setItem("user", JSON.stringify(loggedUser))

        if(email === 'teste@gmail.com' && password === 'secreta'){
            setUser(loggedUser)
            navigate("/")
        }
    }
    const logout = () => {
        console.log('logout')
        setUser(null);
        localStorage.removeItem("user")
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}