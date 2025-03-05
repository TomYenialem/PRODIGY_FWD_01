 const loginInfo = require("../Services/login.service.js");
const login = async (req,res) => {
  try {
    const user = req.body;

    const result = await loginInfo(user);

    if (result.status ===400)
      return res.status(result.status).json({ message: result.message });
    else {
      return res
        .status(result.status)
        .json({ message: result.message, token: result.token });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = login;
