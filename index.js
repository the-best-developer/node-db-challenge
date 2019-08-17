const express = require('express');
const projectEndpoints = require('./router/project.js');
const server = express();

server.use(express.json());
server.use('/api/', projectEndpoints);

server.listen(4000, () => {
    console.log(`Running on port 4000`);
});

module.exports = server;