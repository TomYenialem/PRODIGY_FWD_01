const express = require('express');
const login = require('../Controller/login.controller');
const routes=express.Router()
routes.post('/login',login)
module.exports=routes;