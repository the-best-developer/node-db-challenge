const server = require('./server.js');
const express = require('express');
const projectEndpoints = require('./router/project.js');
const server = express();

server.use(express.json());
server.use('/api/projects', projectEndpoints);

server.listen(4000, () => {
    console.log(`Running on port ${PORT}`);
});

module.exports = server;