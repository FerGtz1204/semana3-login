import React, { useState } from 'react';
import './App.scss';
import LoginForm from './components/LoginForm'; 
import Container from './components/Container';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userToken, setUserToken] = useState('');

    // Login successful
    const handleLogin = (token) => {
        setUserToken(token);
        setLoggedIn(true);
    };

    return (
        <div className="App">
            {!loggedIn ? (
                <LoginForm onLogin={handleLogin} />
            ) : (
                <Container token={userToken} /> // Call Container if logged in
            )}
        </div>
    );
}

export default App;
