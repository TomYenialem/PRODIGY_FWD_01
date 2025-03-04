require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoDb=require('./Db/MongoDb')
const Login=require('./Routes/Login.routes')
const Register=require('./Routes/Registe.routes')
const PORT=process.env.PORT ||4000


// Middleware to parse JSON request bodies
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(Login)
app.use(Register)

app.listen(()=>{
    mongoDb()
    console.log(`Server running on port ${PORT}`)
})
