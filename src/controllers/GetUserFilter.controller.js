const router = require('express').Router();
const User = require("../models/User");

/**
 * @swagger
 * /api/user/filter:
 *   post:
 *     summary: Filtra usuarios por nombre, email o apellidos.
 *     tags: [Users]
 *     parameters:
 *       - in: header
 *         name: auth-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación válido.
 *       - in: body
 *         name: body
 *         description: Objeto con las propiedades para filtrar.
 *         required: true
 *         schema:
 *           type: object
 *           required: [nombre, email, apellidos]
 *           properties:
 *             nombre:
 *               type: string
 *               description: Nombre a buscar.
 *             email:
 *               type: string
 *               description: Email a buscar.
 *             apellidos:
 *               type: string
 *               description: Apellidos a buscar.
 *     responses:
 *       '200':
 *         description: Lista de usuarios filtrados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '401':
 *         description: Acceso denegado.
 *       '500':
 *         description: Error interno del servidor.

 */

// Función asíncrona para buscar usuarios filtrados
const getUserFilter = async (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const apellidos = req.body.apellidos;
    const user = await User.find({ $or: [{ nombre }, { email }, { apellidos }] });
    return res.status(200).json(user);
}

module.exports = getUserFilter;
