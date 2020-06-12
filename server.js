const express = require("express"); // importing express
const server = express(); // creating server with express

server.use(express.json()); // built in middleware

/****************************Routers*****************************/
const projectsRouter = require('./projects/projectsRouter');
const resourcesRouter = require('./resources/resourcesRouter')

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
/***************************************************************/

server.get("/", (req, res) => {
  res.status(200).json({ api: "up and running" });
});

module.exports = server; // exporting server to index.js