const db = require('../data/db-config');

module.exports = {
  getProjects,
  addProject,
};

function getProjects() {
  return db('projects');
}

function addProject() {}
