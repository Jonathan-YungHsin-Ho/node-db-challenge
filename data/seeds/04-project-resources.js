exports.seed = function(knex) {
  return knex('project-resources').insert([
    {
      name: 'Project 1',
      description: 'Description for Project 1',
      completed: 0,
    },
    { id: 2, colName: 'rowValue2' },
    { id: 3, colName: 'rowValue3' },
  ]);
};
