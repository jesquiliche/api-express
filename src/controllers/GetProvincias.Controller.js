const router = require('express').Router();
const verifyToken = require('../midleware/validate-token');
const Provincia = require('../models/Provincia');

// Obtener todas las provincias
/**
 * @swagger
 * /api/provincias:
 *   get:
 *     tags: [Provincias]
 *     summary: Obtener todas las provincias
 *     description: Devuelve una lista de todas las provincias existentes.
 *     parameters:
 *       - in: header
 *         name: auth-token
 *         required: true
 *         description: Token de autenticación de usuario.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: Código de la provincia.
 *                   nm:
 *                     type: string
 *                     description: Nombre de la provincia.
 *     security:
 *         - auth-token: []
 */
const getProvincia = async (req, res) => {
    const provincias = await Provincia.find().limit(100).sort({nm:1});
    return res.json(provincias);
}

module.exports = getProvincia;
