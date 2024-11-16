import React, { useState } from 'react';
import api from '../api';
const Login = ({ setToken }) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await api.post('/auth/login', { email, password });
setToken(response.data.token);
alert('Login Successful');
} catch (err) {
alert('Error logging in');
}
};
return (
<div>
<h2>Login</h2>
<form onSubmit={handleSubmit}>
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
<button type="submit">Login</button>
</form>
</div>
);
};
export default Login;