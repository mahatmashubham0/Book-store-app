const User = require('../model/user_model')

const checkUserExit = async (req,res,next) => {
   try {
    const {email} = req.body;
    const user = await User.findOne({email});
    if(user) {
        res.status(400).json({message: "user Already exit"})
    }
   } catch (error) {
     console.log(error);
   }
   next();
}

module.exports = {
    checkUserExit
}