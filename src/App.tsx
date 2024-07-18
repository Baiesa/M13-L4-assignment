import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SessionStorageManager from './components/SessionStorageManager';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            {/* Add more routes here */}
            <Route path="/" element={<SessionStorageManager />} />
        </Routes>
    );
};

export default App;