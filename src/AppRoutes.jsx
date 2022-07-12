import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './Pages/LoginPage';
import { HomePage } from './Pages/HomePage';
import { AuthProvider } from './context/auth';

export const AppRoutes = () => {


    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path='/login' element={<LoginPage />} />
                    <Route exact path='/' element={<HomePage />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}