const express = require("express");

const router = express.Router();
const Login = require("./Login.routes");
const Register = require("./Registe.routes");
const allUsers = require("./AllUsers.routes");
const single_user = require("./SingleUser.routes");
const logout = require("./Logout.routes");
router.use(Login);
router.use(Register);
router.use(allUsers);
router.use(single_user);
router.use(logout);

module.exports = router;
