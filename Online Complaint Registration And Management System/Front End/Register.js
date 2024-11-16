import React, { useState } from 'react';
import api from '../api';
const Register = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleSubmit = async (e) => {
e.preventDefault();
try {
await api.post('/auth/register', { name, email, password });
alert('Registration successful');
} catch (err) {
alert('Error registering');
}
};
return (
<div>
<h2>Register</h2>
<form onSubmit={handleSubmit}>
<input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
<button type="submit">Register</button>
</form>
</div>
);
};
export default Register;