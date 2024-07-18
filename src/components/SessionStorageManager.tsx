import React from 'react';

const SessionStorageManager: React.FC = () => {
    const saveToken = (token: string) => {
        sessionStorage.setItem('jwt', token);
    };

    const getToken = () => {
        return sessionStorage.getItem('jwt');
    };

    return (
        <div>
            {/* You can add any UI components here if necessary */}
        </div>
    );
};

export default SessionStorageManager;