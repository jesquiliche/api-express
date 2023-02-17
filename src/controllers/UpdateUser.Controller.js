const User=require("../models/User");
const encriptarContrasena=require("../midleware/encriptar-contrasena");
const verifyToken = require("../midleware/validate-token");

// Función para actualizar un usuario en la base de datos
const UpdateUser = async (req,res) => {

    const {id}=req.params

    // Encriptar la contraseña
    req.body.password=await encriptarContrasena(req.body.password);

    // Buscar el usuario por ID y actualizarlo
    const user = await User.findByIdAndUpdate(id,req.body,{ new: true })

    // Devolver el usuario actualizado
    return res.status(200).json(user);
}

module.exports=UpdateUser;
