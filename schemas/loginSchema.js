const { z } = require("zod");

const loginSchema = z.object({
	email: z
		.string({
			required_error: "Email is required",
		})
		.email({
			message: "Invalid email format",
		}),
	password: z
		.string({
			required_error: "Password is required",
		})
		.min(8, {
			message: "Password must be at least 8 characters",
		})
		.max(50, {
			message: "Password must be at most 50 characters",
		}),
});

module.exports = loginSchema;
