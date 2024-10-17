import axios from "axios";

export const signup = async (userData) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/auth/register`, 
            userData
        )
        return response
    } catch (error) {
        console.log(error)
        throw error.response.data;
    }
};

export const login = async (credentials) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/auth/login`, 
            credentials
        )
        return response
    } catch (error) {
        console.log(error)
        throw error.response.data;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_BASE_URL}/auth/logout`
        )
    } catch (error) {
        console.log(error)
        throw error.response.data;
    }
}