const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) =>
  res.send('<h1>Hello World from Node DB Sprint!</h1>'),
);

module.exports = server;
