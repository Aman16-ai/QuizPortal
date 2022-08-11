const jwt = require("jsonwebtoken")


function getTokenFromBearer(bearer) {
    const token = bearer.split(" ")[1]
    return token
}


function authMiddleware(req,res,next) {
    const bearer = req.headers.authorization
    const token = getTokenFromBearer(bearer)
    if(!token) {
        return res.json({tokenError:"token is not valid"});
    }
    const data = jwt.verify(token, process.env.JWT_SECERT);
    req.user = data.user.id
    next();
}
module.exports = authMiddleware;