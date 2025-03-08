const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    // Retrieve token from the cookies
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Token not found" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }

     
      req.user = decoded;


      next();

    });
  } catch (error) {
    console.error("Error while authenticating", error);
    return res.status(500).json({ message: "Server error" });
  }
};


const isAdmin = async (req, res, next) => {
    // Check if the user is an admin
    if (!req.user ||!req.user.role || req.user.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized access" });
    }
    next();
}

module.exports = {
    auth,
    isAdmin
}
