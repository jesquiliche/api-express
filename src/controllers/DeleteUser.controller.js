const verifyToken = require("../midleware/validate-token");
const User=require("../models/User");

const DeleteUser = async (req,res) => {
    const {id}=req.params;
    const user = await User.findByIdAndRemove(id)
    res.status(204).json({message:"Borrado sadisfactoriamente"})
}

module.exports=DeleteUser;
