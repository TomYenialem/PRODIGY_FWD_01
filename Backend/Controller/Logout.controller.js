const logout = async (req, res) => {
  try {
    res.clearCookie("token", { path: "/" });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
    console.log(error);
  }
};
module.exports = logout;
