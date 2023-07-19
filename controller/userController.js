const mysql = require("mysql");

const connection = mysql.createConnection({
	host: process.env.HOST_DATABASE,
	user: process.env.USER_DATABASE,
	password: process.env.PASS_DATABASE,
	database: process.env.NAME_DATABASE,
	port: process.env.PORT_DATABASE,
});

const getId = () => {
	const date = Date.now();
	return date;
};

exports.addRegisterUser = (req, res) => {
	const { nombre, apPaterno, apMaterno, email, telefono, seguro } = req.body;
	const id = getId();

	const query = `insert into users values ('${id}', '${nombre}', '${apPaterno}', '${apMaterno}', '${email}', '${telefono}', '${seguro}')`;

	connection.query(query, (err, rows, fields) => {
		if (err) return err;

		// console.log(rows.affectedRows);
		res.json({
			msg: "User added correctly",
			data: { id, nombre, apPaterno, apMaterno, email, telefono, seguro },
		});
	});
};
