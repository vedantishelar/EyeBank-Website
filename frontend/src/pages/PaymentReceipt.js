// frontend/src/pages/PaymentReceipt.js

import React, { useState } from 'react';
import axios from 'axios';

function PaymentReceipt() {
    const [receipt, setReceipt] = useState(null);
    const [error, setError] = useState('');

    const generateReceipt = async () => {
        try {
            // Placeholder for payment receipt generation logic
            // This could involve integrating with a payment gateway
            // For demonstration, we'll mock a receipt
            const mockReceipt = {
                id: 'RCPT123456',
                date: new Date().toLocaleDateString(),
                amount: '$100',
                donor: 'John Doe',
            };
            setReceipt(mockReceipt);
        } catch (err) {
            setError('Failed to generate receipt');
        }
    };

    return (
        <div className="text-center">
            <h2>Payment Receipt</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {receipt ? (
                <div className="card mx-auto" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Receipt ID: {receipt.id}</h5>
                        <p className="card-text">Date: {receipt.date}</p>
                        <p className="card-text">Amount: {receipt.amount}</p>
                        <p className="card-text">Donor: {receipt.donor}</p>
                        <button className="btn btn-primary" onClick={() => setReceipt(null)}>Generate Another</button>
                    </div>
                </div>
            ) : (
                <button className="btn btn-success" onClick={generateReceipt}>Generate Receipt</button>
            )}
        </div>
    );
}

export default PaymentReceipt;
