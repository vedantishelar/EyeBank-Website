// backend/routes/donorRoutes.js

const express = require('express');
const router = express.Router();
const {
    getDonors,
    addDonor,
    updateDonor,
    deleteDonor,
} = require('../controllers/donorController');
const { protect } = require('../middleware/authMiddleware');

// Get All Donors
router.get('/', protect, getDonors);

// Add Donor
router.post('/', protect, addDonor);

// Update Donor
router.put('/:id', protect, updateDonor);

// Delete Donor
router.delete('/:id', protect, deleteDonor);

module.exports = router;
