require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoDb = require("./Db/MongoDb");
const Login = require("./Routes/Login.routes");
const Register = require("./Routes/Registe.routes");
const allUsers = require("./Routes/AllUsers.routes");
const single_user = require("./Routes/SingleUser.routes");
const logout =require ('./Routes/Logout.routes')
const PORT = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");

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
app.use(Login);
app.use(Register);
app.use(allUsers);
app.use(single_user);
app.use(logout)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  mongoDb();
});
