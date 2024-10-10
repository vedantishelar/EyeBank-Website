// backend/controllers/donorController.js

const Donor = require('../models/Donor');

// @desc    Get all donors
// @route   GET /api/donors
// @access  Private
exports.getDonors = async (req, res) => {
    try {
        const donors = await Donor.find();
        res.status(200).json({ success: true, data: donors });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Add new donor
// @route   POST /api/donors
// @access  Private
exports.addDonor = async (req, res) => {
    const { name, age, bloodGroup, contact, email, address } = req.body;

    try {
        const donor = new Donor({
            name,
            age,
            bloodGroup,
            contact,
            email,
            address,
        });

        await donor.save();

        res.status(201).json({ success: true, data: donor });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Update donor availability
// @route   PUT /api/donors/:id
// @access  Private
exports.updateDonor = async (req, res) => {
    const { available } = req.body;

    try {
        let donor = await Donor.findById(req.params.id);

        if (!donor) {
            return res.status(404).json({ success: false, message: 'Donor not found' });
        }

        donor.available = available;
        await donor.save();

        res.status(200).json({ success: true, data: donor });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

// @desc    Delete donor
// @route   DELETE /api/donors/:id
// @access  Private
exports.deleteDonor = async (req, res) => {
    try {
        const donor = await Donor.findById(req.params.id);

        if (!donor) {
            return res.status(404).json({ success: false, message: 'Donor not found' });
        }

        await donor.remove();

        res.status(200).json({ success: true, message: 'Donor removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};
