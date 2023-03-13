const router = require('express').Router();
const User=require("../models/User"); // Se importa el modelo de usuario definido en el archivo User.js
const bcrypt = require('bcryptjs'); // Se importa la biblioteca bcryptjs para encriptar contraseñas
const jwt = require('jsonwebtoken'); // Se importa la biblioteca jsonwebtoken para manejar tokens JWT


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints relacionados con la gestión de usuarios
 */

/**
 * @swagger
 * /api/user:
 *   parameters:
 *       - in: header
 *         name: auth-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación válido.
 *   get:
 *     summary: Obtiene una lista de todos los usuarios
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *          description: Acceso denegado
 *       500:
 *          description: Error interno del servidor
 */


// Función asíncrona que maneja la solicitud GET en la ruta /api/users
const getUser= async (req, res) => {
    
    const user = await User.find(); // Se realiza una búsqueda de todos los usuarios en la base de datos utilizando el modelo definido anteriormente
    return res.status(200).json(user); // Se devuelve una respuesta con el código de estado HTTP 200 (OK) y la lista de usuarios en formato JSON
    
}

module.exports=getUser; // Se exporta la función getUser para que pueda ser utilizada en otras partes de la aplicación Node.js
