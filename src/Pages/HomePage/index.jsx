
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth';
import './style.css'


export function HomePage() {

    const navigate = useNavigate();

    const { register } = useContext(AuthContext)

    const [ name, setName ] = useState("")
    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('submit', name, username, email, password)
        register(name, username, email, password)
        
        navigate("/login")
    }

    const handlSignIn = (e) => {
        e.preventDefault();
        
        navigate("/login")
    }

    return (
        <div id="home">
            <div className="signin">
                <div className="container">
                    <h2 className="title">
                        Welcome Back!
                    </h2>
                    <p className="text">
                        Enter with your personal info
                    </p>
                    <button className='button' onClick={handlSignIn}>SignIn</button>
                </div>
            </div>        
            <div className="signup">
                <div className="container">
                    <h2 className="title">
                        Create Account
                    </h2>
                    <div className="social">
                        ...
                    </div>
                    <p className="text">
                        Enter your registration data
                    </p>
                    <div className="form">
                        <form action="" className="formSignup">
                            <div>
                                <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.currentTarget.value)}/>
                            </div>
                            <div>
                                <input type="text" name="username" id="username" placeholder="Username"value={username} onChange={(e) => setUsername(e.currentTarget.value)}/>
                            </div>
                            <div>
                                <input type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
                            </div>
                            <div>
                                <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
                            </div>
                            <div>
                                <button type="submit" className='button' onClick={handleSubmit}>SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}