import React, { useEffect, useState } from 'react';
import api from '../api';
const ComplaintsList = ({ userId }) => {
const [complaints, setComplaints] = useState([]);
useEffect(() => {
const fetchComplaints = async () => {
const response = await api.get(`/complaints/user/${userId}`);
setComplaints(response.data);
};
fetchComplaints();
}, [userId]);
return (
<div>
<h2>Your Complaints</h2>
<ul>
{complaints.map((complaint) => (
<li key={complaint._id}>
<h3>{complaint.title}</h3>
<p>{complaint.description}</p>
<p>Status: {complaint.status}</p>
</li>
))}
</ul>
</div>
);
};
export default ComplaintsList;