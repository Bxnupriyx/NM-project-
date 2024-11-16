import React, { useState } from 'react';
import api from '../api';
const ComplaintForm = ({ userId }) => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const handleSubmit = async (e) => {
e.preventDefault();
try {
await api.post('/complaints', { userId, title, description });
alert('Complaint submitted successfully');
} catch (err) {
alert('Error submitting complaint');
}
};
return (
<div>
<h2>Submit a Complaint</h2>
<form onSubmit={handleSubmit}>
<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
<textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
<button type="submit">Submit Complaint</button>
</form>
</div>
);
};
export default ComplaintForm;
