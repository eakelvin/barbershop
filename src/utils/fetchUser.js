import { useState, useEffect } from 'react';
import axios from 'axios';

const FetchUser = () => {
    const apiUrl = import.meta.env.VITE_PUBLIC_API_BASE_URL;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(
                    `${apiUrl}/auth/user`, 
                    { withCredentials: true }
                );
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);

    return { user, loading, error };
};

export default FetchUser;
