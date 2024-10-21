import axios from "axios";
const apiUrl = import.meta.env.VITE_PUBLIC_API_BASE_URL;

export const signup = async (userData) => {
    try {
        const response = await axios.post(
            `${apiUrl}/auth/register`, 
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
            `${apiUrl}/auth/login`, 
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
            `${apiUrl}/auth/logout`, 
            { withCredentials: true }
        )
        console.log(response.data);
    } catch (error) {
        console.log(error)
        throw error.response.data;
    }
};

export const getUser = async () => {
    try {
        const response = await axios.get(
            `${apiUrl}/auth/user`, 
            { withCredentials: true }
        );
    } catch (error) {
        console.error('Error fetching profile:', error);
    }
};
