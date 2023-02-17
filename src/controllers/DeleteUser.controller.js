// Importar el middleware de validación de token y el modelo de usuario
const verifyToken = require("../midleware/validate-token");
const User=require("../models/User");

// Función para borrar un usuario por su id
const DeleteUser = async (req,res) => {
    const {id}=req.params; // Obtener el id del usuario de los parámetros de la solicitud
    const user = await User.findByIdAndRemove(id) // Encontrar y eliminar el usuario
    res.status(204).json({message:"Borrado sadisfactoriamente"}) // Enviar una respuesta con un mensaje de éxito
}

// Exportar la función
module.exports=DeleteUser;
