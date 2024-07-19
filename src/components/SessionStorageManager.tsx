import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SessionStorageManager: React.FC = () => {
  const { logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
  
    logout();
   
    window.location.href = window.location.origin;
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {isAuthenticated ? (
        <>
          <p>Logged in successfully</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>No user authenticated</p>
      )}
    </div>
  );
};

export default SessionStorageManager;