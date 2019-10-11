const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

/* ******************************************************************* */

// MVP Endpoints

// GET /api/projects endpoint for Retrieving a list of projects -
router.get('/', (req, res) => {});

// POST /api/projects endpoint for Adding projects -
router.post('/', (req, res) => {});

/* ******************************************************************* */

// Stretch Endpoints

/* ******************************************************************* */

module.exports = router;
