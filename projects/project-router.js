const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

/* ******************************************************************* */

// MVP Endpoints

// GET /api/projects endpoint for Retrieving a list of projects - TESTED
router.get('/', (req, res) => {
  Projects.getProjects()
    .then(projects => res.status(200).json(projects))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get projects' });
    });
});

// POST /api/projects endpoint for Adding projects -
router.post('/', (req, res) => {});

/* ******************************************************************* */

// Stretch Endpoints

/* ******************************************************************* */

module.exports = router;
