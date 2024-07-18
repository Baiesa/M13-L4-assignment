import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('jwt');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);
};

export default useAuth;