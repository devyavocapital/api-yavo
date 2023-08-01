const { fnSequelize } = require("../db/config");

exports.addRegisterUser = async (req, res) => {
	const sequelize = fnSequelize();

	const {
		nombre,
		apPaterno,
		apMaterno,
		email,
		telefono,
		seguro,
		numeroSeguro,
		terms,
	} = req.body;

	try {
		const queryResult = await sequelize.query(
			`EXEC SP_PROSPECTOS ${nombre}, ${apPaterno}, ${apMaterno}, '${email}', ${telefono}, ${seguro}, ${numeroSeguro}, ${terms}`,
		);
		sequelize.close();
		res.json({ queryResult });
	} catch (error) {
		// console.error();
		const errorLog = `"Unable to connect to the database:", ${error.original}`;
		res.json({ error: errorLog });
	}
};
