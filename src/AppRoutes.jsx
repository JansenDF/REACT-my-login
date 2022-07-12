import React, { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route, PrivateRouter, Navigate } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage';
import { HomePage } from './Pages/HomePage';
import { AuthProvider, AuthContext } from './context/auth';

export const AppRoutes = () => {

    const PrivateRouter = ( {children} ) => {

        const  { authenticated } = useContext(AuthContext);

        if(!authenticated){
            return(
                <Navigate to={"/login"} />
            )
        }
        return children;
    }

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path='/login' element={<LoginPage />} />
                    <Route exact path='/' element={<PrivateRouter><HomePage /></PrivateRouter>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}