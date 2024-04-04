const express = require("express");
const router = express.Router();
const { createTodo } = require("../controllers/todo.controller");

router.route("/").post(createTodo);

module.exports = router;
