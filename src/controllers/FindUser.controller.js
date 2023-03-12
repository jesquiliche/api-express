// Importar los módulos necesarios
const verifyToken = require("../midleware/validate-token");
const User = require("../models/User");


/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Busca un usuario por su id
 *     description: Devuelve los datos de un usuario encontrado por su id
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id del usuario a buscar
 *     responses:
 *       200:
 *         description: Datos del usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
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
    return res.status(200).json(user);
  } catch (error) {
    // Si hay un error en la búsqueda, devolver un mensaje de error
    res.status(500).json({ message: "Error al buscar el usuario" });
  }
}

// Exportar la función
module.exports = FindUser;
