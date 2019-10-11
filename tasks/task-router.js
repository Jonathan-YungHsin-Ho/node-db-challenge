const express = require('express');

const Tasks = require('./task-model');

const router = express.Router();

/* ******************************************************************* */

// MVP Endpoints

// GET /api/tasks endpoint for Retrieving a list of tasks -
router.get('/', (req, res) => {});

// POST /api/tasks endpoint for Adding tasks -
router.post('/', (req, res) => {});

/* ******************************************************************* */

// Stretch Endpoints

/* ******************************************************************* */

module.exports = router;
