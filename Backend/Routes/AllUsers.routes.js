const express=require('express');
const routes=express.Router();
const allUsers=require('../Controller/AllUsers.controller')
const { auth, isAdmin} =require('../Middleware/authorization')


routes.get('/alluser',[auth,isAdmin],allUsers);

module.exports=routes;