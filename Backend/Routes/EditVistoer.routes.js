const express = require("express");
const editVistor = require("../Controller//EditVisoters.controller");
const routes = express.Router();
const { auth, isAdmin } = require("../Middleware/authorization");
routes.post("/edit/:id",[auth,isAdmin] ,editVistor);
module.exports = routes;
