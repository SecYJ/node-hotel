require("dotenv").config();
const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const routes = require("./routes");
const { connect } = require("./connect");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, async () => {
	const uri = process.env.MONGO_URI.replace("<password>", process.env.MONGO_PASSWORD);

	try {
		await connect(uri);
		console.log(`Server running on port ${process.env.PORT}`);
	} catch (error) {}
});
