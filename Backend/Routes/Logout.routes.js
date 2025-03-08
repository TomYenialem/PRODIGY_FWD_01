const express = require("express");
const logout = require("../Controller/Logout.controller");
const routes = express.Router();
routes.post("/logout", logout);
module.exports = routes;
