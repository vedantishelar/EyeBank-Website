// frontend/src/pages/AddDonor.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddDonor() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        bloodGroup: '',
        contact: '',
        email: '',
        address: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const { name, age, bloodGroup, contact, email, address } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/donors`, formData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            navigate('/donors');
        } catch (err) {
            setError(err.response.data.message || 'Failed to add donor');
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <h2>Add New Donor</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Age</label>
                        <input type="number" className="form-control" name="age" value={age} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Blood Group</label>
                        <input type="text" className="form-control" name="bloodGroup" value={bloodGroup} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Contact</label>
                        <input type="text" className="form-control" name="contact" value={contact} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" value={email} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Address</label>
                        <textarea className="form-control" name="address" value={address} onChange={onChange} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Donor</button>
                </form>
            </div>
        </div>
    );
}

export default AddDonor;
