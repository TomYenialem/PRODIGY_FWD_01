const express = require('express');
const signup=require('../Controller/loginhandler')
const routes=express.Router()
routes.post('/login',signup)

module.exports=routes;