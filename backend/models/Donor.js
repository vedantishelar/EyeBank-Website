// backend/models/Donor.js

const mongoose = require('mongoose');

const DonorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add donor name'],
    },
    age: {
        type: Number,
        required: [true, 'Please add donor age'],
    },
    bloodGroup: {
        type: String,
        required: [true, 'Please add blood group'],
    },
    contact: {
        type: String,
        required: [true, 'Please add contact number'],
    },
    email: {
        type: String,
        required: [true, 'Please add email'],
    },
    address: {
        type: String,
        required: [true, 'Please add address'],
    },
    available: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Donor', DonorSchema);
