const express = require("express");
const register = require("../Controller/register.controller");
const routes = express.Router();
routes.post("/register", register);
module.exports = routes;


