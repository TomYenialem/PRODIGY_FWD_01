const userInfo = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginInfo = async (user,res) => {
  try {

    if (!user.email || !user.password) {
      return { status: 400, message: "Please fill all the fields" };
    }
    const exsitedUser = await userInfo.findOne({ email: user.email });
    if (!exsitedUser) {
      return { status: 400, message: "Email not registered" };
    }
    const checkPassword = await bcrypt.compare(
      user.password,
      exsitedUser.password
    );
    if (!checkPassword) {
      return { status: 400, message: "Password not matched" };
    }
    const payloads = {
      id: exsitedUser._id,
      email: exsitedUser.email,
      role: exsitedUser.role,
      name: exsitedUser.name,
    };
    const token = jwt.sign(payloads, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true, // Cookie can't be accessed via JavaScript
      secure: process.env.NODE_ENV === "production", // Only secure if in production
      sameSite: "none", // Cookie will be sent for cross-origin requests
    });
    return { status: 200, message: "Login Successfull", token: token };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Server Error" };
  }
};

module.exports = loginInfo;
