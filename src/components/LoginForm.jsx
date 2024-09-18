import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Initialize error message

        // Authentication request to the regres.in API
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            onLogin(data.token); // Assign the token 
        } else {
            setErrorMessage('Invalid credentials. Try it again');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='todo-list'>
                <div className='file-input'>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div> 
            </div>
            <div className='todo-list'>
                <div className='file-input'>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            </div>
            <button type="submit">Login</button>
            {errorMessage && <p style={{ color: 'yellow' }}>{errorMessage}</p>}
        </form>
    );
};

export default LoginForm;
