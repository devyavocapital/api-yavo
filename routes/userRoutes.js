const express = require("express");
const router = express.Router();

const users = require("../controller/userController");

router.post("/", users.addRegisterUser);

module.exports = router;
