const User=require("../models/User");
const encriptarContrasena=require("../midleware/encriptar-contrasena");
const verifyToken = require("../midleware/validate-token");

/**
 * @swagger
 * /api/user/{id}:
 *  put:
 *    summary: Actualiza un usuario existente en la base de datos
 *    description: Actualiza un usuario existente en la base de datos utilizando su ID.
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
 *        description: ID del usuario a actualizar.
 *    requestBody:
 *      description: Información del usuario a actualizar
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              nombre:
 *                type: string
 *              password:
 *                type: string
 *              apellidos:
 *                type: string
 *              telefono:
 *                type: integer
 *              direccion:
 *                type: string
 *              provincia:
 *                type: string
 *              poblacion:
 *                type: string
 *            example:
 *              email: usuario@ejemplo.com
 *              nombre: Nombre
 *              password: 123456
 *              apellidos: Apellidos
 *              telefono: 123456789
 *              direccion: Dirección
 *              provincia: Provincia
 *              poblacion: Población
 *    responses:
 *      200:
 *        description: Usuario actualizado exitosamente
 *      400:
 *        description: Error en la petición o usuario no encontrado
 *      500:
 *        description: Error del servidor
 */

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
