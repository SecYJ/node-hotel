const { StatusCodes } = require("http-status-codes");
const Todo = require("../models/todo.model");

const createTodo = async (req, res) => {
	const body = req.body;
	const newTodo = await Todo.create(body);

	res.status(StatusCodes.CREATED).json({
		status: "success",
		data: newTodo,
	});
};

module.exports = { createTodo };
