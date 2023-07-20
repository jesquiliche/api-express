const router = require('express').Router();
const Provincia = require('../models/Provincia');

// Obtener todas las provincias
/**
 * @swagger
 * /api/provincias:
 *   get:
 *     tags: [Provincias]
 *     summary: Obtener todas las provincias
 *     description: Devuelve una lista de todas las provincias existentes.
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
 */
const getProvincia = async (req, res) => {
    const provincias = await Provincia.find();
    return res.json(provincias);
}

module.exports = getProvincia;
