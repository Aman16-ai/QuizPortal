const jwt = require("jsonwebtoken")
const JWT_SECERT = "quizauth#@!23$"

function authMiddleware(req,res,next) {
    const token = req.header('auth-token');
    if(!token) {
        return res.json({tokenError:"token is not valid"});
    }
    const data = jwt.verify(token,JWT_SECERT);
    req.user = data.user.user
    next();
}
module.exports = authMiddleware;