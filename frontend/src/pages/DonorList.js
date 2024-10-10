// frontend/src/pages/DonorList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DonorList() {
    const [donors, setDonors] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchDonors = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/donors`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setDonors(res.data.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchDonors();
    }, [token]);

    if (loading) {
        return <p>Loading donors...</p>;
    }

    return (
        <div>
            <h2>Donor List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Blood Group</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Available</th>
                    </tr>
                </thead>
                <tbody>
                    {donors.map(donor => (
                        <tr key={donor._id}>
                            <td>{donor.name}</td>
                            <td>{donor.age}</td>
                            <td>{donor.bloodGroup}</td>
                            <td>{donor.contact}</td>
                            <td>{donor.email}</td>
                            <td>{donor.address}</td>
                            <td>{donor.available ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DonorList;
