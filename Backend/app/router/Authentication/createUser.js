const User = require("../../model/User")
const bcrypt = require("bcrypt")
const jwt= require("jsonwebtoken")
// const JWT_SECERT = "quizauth#@!23$"
const JWT_SECERT = process.env.JWT_SECERT
module.exports = async(req,res) => {
   try {
    const existingUser = await User.findOne({email:req.body.email});
    console.log(existingUser)
    if(existingUser) {
        return res.status(400).json({error:"email already used"})
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt)
    const user = await User.create({
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email,
        password: hashedPassword
    })
    const data = {
        user: {
            id : user.id
        }
    };
    const authtoken = jwt.sign(data,process.env.JWT_SECERT)
    console.log(authtoken)
    const success = "Registered successfully"
    return res.json({success,authtoken})

   }
   catch(err) {
       return res.status(500).json({"error":"Something went wrong"})
   }
}