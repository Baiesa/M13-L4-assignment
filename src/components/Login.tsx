import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://fakestoreapi.com/auth/login', { email, password });
            const token = response.data.token;
            sessionStorage.setItem('jwt', token);
            alert('Login successful!');
           
        } catch (error) {
            console.error('Login failed', error);
            setErrorMessage('Login failed. Please check your credentials.');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        handleLogin();
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default Login;