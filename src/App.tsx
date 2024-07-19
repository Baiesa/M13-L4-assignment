import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SessionStorageManager from './components/SessionStorageManager';
import Login from './components/Login';
import Auth0ProviderWithNavigate from './Auth0ProviderWithNavigate';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Auth0ProviderWithNavigate>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<SessionStorageManager />} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Auth0ProviderWithNavigate>
    </Router>
  );
};

export default App;