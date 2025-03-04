const express = require("express");
const signin = require("../Controller/registerhandler");
const routes = express.Router();
routes.post("/register", signin);
module.exports = routes;
