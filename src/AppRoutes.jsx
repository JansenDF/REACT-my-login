import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { LoginPage } from './Pages/LoginPage';
import { Dashboard } from './Pages/Dashboard';
import { AuthProvider, AuthContext } from './context/auth';

export const AppRoutes = () => {

    const PrivateRouter = ( {children} ) => {

        const  { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return(
                <div className="loading">Loading...</div>
            )
        }
        if(!authenticated){
            return(
                <Navigate to={"/"} />
            )
        }
        return children;
    }

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path='/' element={<HomePage />} />
                    <Route exact path='/login' element={<LoginPage />} />
                    <Route exact path='/dashboard' element={<PrivateRouter><Dashboard /></PrivateRouter>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}