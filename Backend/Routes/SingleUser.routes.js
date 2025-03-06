const express = require("express");
const fetchSingleInfo =require('../Controller/SingleUserInfo.controller');
const { auth } = require("../Middleware/authorization");
const routes = express.Router();
routes.get("/single_user",auth, fetchSingleInfo);
module.exports = routes;
