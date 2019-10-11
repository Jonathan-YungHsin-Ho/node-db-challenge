const express = require('express');

const Resources = require('./resource-model');

const router = express.Router();

/* ******************************************************************* */

// MVP Endpoints

// GET /api/resources endpoint for Retrieving a list of resources -
router.get('/', (req, res) => {});

// POST /api/resources endpoint for Adding resources -
router.post('/', (req, res) => {});

/* ******************************************************************* */

// Stretch Endpoints

/* ******************************************************************* */

module.exports = router;
