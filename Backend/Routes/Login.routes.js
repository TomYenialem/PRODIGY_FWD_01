const express = require('express');
const signup=require('../Controller/loginhandler')
const signin=require('../Controller/registerhandler')
const routes=express.Router()
routes.post('/login',signup)
routes.post('/register',signin)
module.exports=routes;