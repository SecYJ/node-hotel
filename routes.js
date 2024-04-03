const express = require("express");
const routes = express.Router();

routes.use("/api/v1/auth", require("./routes/auth"));

module.exports = routes;
