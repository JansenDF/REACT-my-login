import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const registerUser = (name, username, email, password_hash) => {

    return (
        api.post("/user/create", {name, username, email, password_hash})
    )
}

export const createSession = async (email, password) => {
    
    return(
        api.post("/user/token", {email, password})
    )
}

export const getUsers = async () => {
    return api.get("/user/list");
}