const mongoose = require("mongoose");

const connect = async (uri) => {
	try {
		await mongoose.connect(uri);
	} catch (error) {
		throw new Error("Connect db failed!!!!");
	}
};

module.exports = { connect };
