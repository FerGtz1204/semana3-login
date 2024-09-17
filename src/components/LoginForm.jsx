import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            onLogin(data.token); // Maneja el token de login
            setError(false);
        } else {
            setError(true); // Muestra error si no hay login exitoso
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ border: error ? '2px solid red' : '' }}
                    required
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ border: error ? '2px solid red' : '' }}
                    required
                />
            </div>
            <button type="submit">Login</button>
            {error && <p style={{ color: 'red' }}>Credenciales inválidas. Inténtalo de nuevo.</p>}
        </form>
    );
};

export default LoginForm;