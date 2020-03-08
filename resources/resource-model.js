const db = require('../data/db-config');

module.exports = {
  getResources,
  // getResourceById,
  addResource,
};

function getResources() {
  return db('resources');
}

// function getResourceById() {}

function addResource(resource) {
  return db('resources').insert(resource);
  // .then(ids => getResourceById(ids[0]))
}
