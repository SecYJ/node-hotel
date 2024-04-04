const express = require("express");
const routes = express.Router();

routes.use("/api/v1/auth", require("./routes/auth"));
routes.use("/api/v1/todos", require("./routes/todo"));

module.exports = routes;
