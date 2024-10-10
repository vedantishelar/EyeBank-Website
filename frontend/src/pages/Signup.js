// frontend/src/pages/Signup.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, { name, email, password });
            localStorage.setItem('token', res.data.token);
            navigate('/donors');
        } catch (err) {
            setError(err.response.data.message || 'Registration failed');
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <h2>Signup</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="email" value={email} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={onChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Signup</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
