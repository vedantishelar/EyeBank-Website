// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DonorList from './pages/DonorList';
import AddDonor from './pages/AddDonor';
import PaymentReceipt from './pages/PaymentReceipt';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected Routes */}
          <Route 
            path="/donors" 
            element={
              <ProtectedRoute>
                <DonorList />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/add-donor" 
            element={
              <ProtectedRoute>
                <AddDonor />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/payment-receipt" 
            element={
              <ProtectedRoute>
                <PaymentReceipt />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
