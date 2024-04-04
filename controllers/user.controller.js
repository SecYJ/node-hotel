const { StatusCodes } = require("http-status-codes");
const loginSchema = require("../schemas/loginSchema");

const register = async (req, res) => {
	res.send("register route");
};

const login = async (req, res) => {
	// NOTE: 用 zod 验证 req.body 中的 email 和 password
	const result = loginSchema.safeParse(req.body);

	if (!result.success) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			status: "fail",
			message: "Invalid email or password",
		});
	}

	// NOTE: 从 DB find user
	const user = await User.findOne({ email: result.data.email });

	if (!user) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			status: "fail",
			message: "Invalid credentials",
		});
	}

	// NOTE: 使用 bcrypt 对比 db 中的 hashpassword 是否与 req.body 中的 password 相同
	const isCorrectPassword = await bcrypt.compare(result.data.password, user.password);

	if (!isCorrectPassword) {
		return res.status(StatusCodes.BAD_REQUEST).json({
			status: "fail",
			message: "Invalid credentials",
		});
	}

	res.status(StatusCodes.OK).json({
		status: "success",
		message: "Logged in successfully",
		data: {
			userId: user._id,
			username: user.username,
		},
	});
};

module.exports = { register, login };
