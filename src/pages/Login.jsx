import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const { data } = await axios.post('http://localhost:8080/api/auth/login', { username, password });
            localStorage.setItem('token', data.token);
            alert('Logged in successfully!');
        } catch (err) {
            alert('Login failed');
        }
    };

    return (
        <div className="p-4 max-w-sm mx-auto">
            <h2 className="text-xl mb-4">Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="border p-2 w-full mb-2" />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 w-full mb-2" />
            <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2">Login</button>
        </div>
    );
}