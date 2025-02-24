import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/user/login', { username, password });
            alert('Login successful');
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            alert('Error logging in');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '300px', margin: '0 auto' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                    style={{ padding: '8px' }}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    style={{ padding: '8px' }}
                />
                <button type="submit" style={{ padding: '8px', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
