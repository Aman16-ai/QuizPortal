const jwt = require("jsonwebtoken")
const User = require("../../model/User")
const bcrypt = require("bcrypt")
module.exports = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user === null) {
            return res.status(400).json({ error: "user not found" })
        }

        let comparePassword = await bcrypt.compare(req.body.password,user.password)
        if (!comparePassword) {
            return res.status(400).json({ error: "wrong credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data,  process.env.JWT_SECERT)
        const success = "login successfully"
        return res.status(200).json({ success, authtoken })
    }

    catch (err) {
        return res.status(500).json({ "error": "Something went wrong" })
    }
}