const { verifyToken } = require("../utils/slugify");

module.exports = (req, res, next) => {
  // verify token
  const isValid = req.headers.authorization?.startsWith("Bearer ");
  if (!isValid) return res.status(401).json({ success: false, error: "Unauthorized" });

  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = verifyToken(token);
    if(!payload){
      return res.json({
        success:false,
        error:"invalid token"
      });
    }
    req.user = payload;
  } catch (error) {
    return res.json({
      success: false,
      error: "invalid token",
    });
  }

  next();
};