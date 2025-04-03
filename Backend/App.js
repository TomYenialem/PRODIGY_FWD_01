require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoDb = require("./Db/MongoDb");
const path = require("path");

const PORT = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");
const router = require("./Routes/index");

// __dirname is automatically available in Node.js, no need to redefine it

// Middleware to parse JSON request bodies
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "https://prodigy-fwd-01-6.onrender.com",
      "https://prodigy-fwd-01-7.onrender.com",
    ],
    credentials: true,
  })
);

app.use(router);

// Serve static files from the frontend
app.use(express.static(path.join(__dirname, "/Frontend/dist")));

// Route to catch-all and send the index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/Frontend/dist/index.html"));
});
console.log(__dirname, "/Frontend/dist/index.html");
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  mongoDb();
});
