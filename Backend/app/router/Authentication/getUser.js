const User = require('../../model/User');

module.exports = async(req,res,next) => {

    try {
        const userId = req.user;
        console.log(userId)
        const userinfo = await User.findById(userId).select("-password");
        console.log(userinfo);
        if(!userinfo) {
            return res.json({error:"user is not found"});
        }
        return res.json({user:userinfo})
    }
    catch(err) {
        return res.json("something went wrong");
    }
}