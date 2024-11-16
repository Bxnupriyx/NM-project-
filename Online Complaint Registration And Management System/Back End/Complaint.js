const mongoose = require('mongoose');
const ComplaintSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
title: { type: String, required: true },
description: { type: String, required: true },
status: { type: String, default: 'Pending' }, // Example statuses: Pending, In Progress, Resolved
dateSubmitted: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Complaint', ComplaintSchema);