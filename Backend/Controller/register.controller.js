const rejesterInfo = require("../Services/register.service.js");
const register = async (req, res) => {
  try {
    const user = req.body;
    const result = await rejesterInfo(user);
    if (result.status === 400)
      return res.status(result.status).json({ message: result.message });
    else{
      return res.status(result.status).json({ message: result.message });
    }
    
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = register;
