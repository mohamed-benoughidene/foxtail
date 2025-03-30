const express = require('express');
const { generateBusinessNames } = require('../controllers/generateBusinessNamesController');

const router = express.Router();

// Define the route for generating business names
router.post('/generate-names', generateBusinessNames);

module.exports = router;
