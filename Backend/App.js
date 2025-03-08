require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoDb = require("./Db/MongoDb");

const PORT = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");
const router=require('./Routes/index')

// Middleware to parse JSON request bodies
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(router)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  mongoDb();
});
