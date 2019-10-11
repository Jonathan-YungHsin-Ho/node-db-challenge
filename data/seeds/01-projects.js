exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: 'Project 1',
      description: 'Description for Project 1',
      completed: 0,
    },
    {
      name: 'Project 2',
      description: 'Description for Project 2',
      completed: 0,
    },
  ]);
};
