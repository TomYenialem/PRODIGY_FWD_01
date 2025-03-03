require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoDb=require('./Db/MongoDb')
const routes=require('./Routes/Login.routes')
const PORT=process.env.PORT ||4000


// Middleware to parse JSON request bodies
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use('/api',routes)


app.listen(()=>{
    mongoDb()
    console.log(`Server running on port ${PORT}`)
})
