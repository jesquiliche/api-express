// Importar los módulos necesarios
const verifyToken = require("../midleware/validate-token");
const User = require("../models/User");


/**
 * @swagger
 * /api/user/{id}:
 *   parameters:
 *       - in: header
 *         name: auth-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación válido.
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id del usuario a buscar
 *   get:
 *     summary: Busca un usuario por su id
 *     description: Devuelve los datos de un usuario encontrado por su id
 *     tags: [Users]
 *    
 *     responses:
 *       200:
 *         description: Datos del usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Error al buscar el usuario.
 * 
 *       401:
 *         description: Acceso denegado. El usuario no está autenticado o no tiene permisos para acceder al recurso.
 *       404:
 *         description: El usuario con el id especificado no existe.
 *       500:
 *         description: Error interno del servidor.
 */


// Función para buscar un usuario por su id
const FindUser = async (req, res) => {
  // Obtener el id del usuario de los parámetros de la ruta
  const { id } = req.params;
  
  try {
    // Buscar el usuario en la base de datos
    const user = await User.findById(
      id,
      { "_id": 0, "__v": 0, "createdAt": 0, "updatedAt": 0 }
    );
    // Devolver el usuario encontrado en la respuesta
    console.log(user)
    if(!user) {
      return res.status(404).json({mensaje:"El usuario con el id especificado no existe."});
    }
    return res.status(200).json(user);
  } catch (error) {
    // Si hay un error en la búsqueda, devolver un mensaje de error
    
    res.status(400).json({ message: "error al buscar el usuario" });
  }
}

// Exportar la función
module.exports = FindUser;
