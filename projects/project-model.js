const db = require('../data/db-config');

module.exports = {
  getProjects,
  // getProjectById,
  addProject,
};

function getProjects() {
  return db('projects');
}

// function getProjectById() {}

function addProject(project) {
  return db('projects').insert(project);
  // .then(ids => getProjectById(ids[0]))
}
