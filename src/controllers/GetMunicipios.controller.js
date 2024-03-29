const Municipio = require("../models/Municipio");

/**
 * @swagger
 * /api/municipios:
 *   get:
 *     tags: [Municipios]
 *     summary: Obtener todos los municipios
 *     description: Devuelve una lista de todos los municipios en la base de datos.
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
 *                   _id:
 *                     type: object
 *                     properties:
 *                       $oid:
 *                         type: string
 *                     description: ID único del municipio.
 *                   id:
 *                     type: string
 *                     description: Código del municipio.
 *                   nm:
 *                     type: string
 *                     description: Nombre del municipio.
 */


const getMunicipio = async (req, res) => {
    const municipios = await Municipio.find();
    return res.status(200).json(municipios);
}

module.exports = getMunicipio;
