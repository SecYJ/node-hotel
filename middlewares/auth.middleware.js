const { StatusCodes } = require("http-status-codes");

const validateToken = async (req, res, next) => {
	const authHeader = req.header("Authorization");

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(StatusCodes.UNAUTHORIZED).json({
			status: "fail",
			message: "Invalid credentials",
		});
	}

	try {
		const token = authHeader.split(" ")[1];
		const user = jwt.verify(token, process.env.JWT_SECRET);
		req.user = user;

		next();
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = { validateToken };
