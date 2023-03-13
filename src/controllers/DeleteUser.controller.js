/**
 * @swagger
 * /api/user/{id}:
 *  delete:
 *    summary: Elimina un usuario existente de la base de datos
 *    description: Elimina un usuario existente de la base de datos utilizando su ID.
 *    tags:
 *      - Users
 *    parameters:
 *      - in: header
 *        name: auth-token
 *        schema:
 *          type: string
 *        required: true
 *        description: Token de autenticación válido.
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del usuario a eliminar.
 *    responses:
 *      200:
 *        description: Usuario eliminado exitosamente
 *      400:
 *        description: Error en la petición o usuario no encontrado
 *      500:
 *        description: Error del servidor
 */




// Importar el middleware de validación de token y el modelo de usuario
const verifyToken = require("../midleware/validate-token");
const User=require("../models/User");

// Función para borrar un usuario por su id
const DeleteUser = async (req,res) => {
    try{
    const {id}=req.params; // Obtener el id del usuario de los parámetros de la solicitud
    const user = await User.findByIdAndRemove(id) // Encontrar y eliminar el usuario
    res.status(204).json({message:"Borrado sadisfactoriamente"}) // Enviar una respuesta con un mensaje de éxito
    }catch(error){
        return res.status(500).json("Error interno del servidor")
    }
}

// Exportar la función
module.exports=DeleteUser;
