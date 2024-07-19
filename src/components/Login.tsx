// Login.tsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    try {
      await loginWithRedirect();
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;