import React, {useState} from 'react'

import './style.css'

export const LoginPage = () => {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', email, password)
    }
    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <form action="" className="form">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
                </div>
                <div className="actions">
                    <button type="submit" onClick={handleSubmit}>Entrar</button>
                </div>
            </form>
        </div>
    )
}