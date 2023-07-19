const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/v1/register", require("./routes/userRoutes"));

app.listen(PORT || 4000, () => {
	console.log(`Servidor corriendo en puerto ${PORT}`);
});
