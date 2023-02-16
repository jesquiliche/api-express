const User=require("../models/User");
const encriptarContrasena=require("../midleware/encriptar-contrasena");
const verifyToken = require("../midleware/validate-token");

const UpdateUser = async (req,res) => {

    const {id}=req.params

    // hash contraseña
    
    req.body.password=await encriptarContrasena(req.body.password);

    const user = await User.findByIdAndUpdate(id,req.body,{ new: true })
    return res.status(200).json(user);
}

module.exports=UpdateUser;