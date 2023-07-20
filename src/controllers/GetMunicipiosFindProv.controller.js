const router = require('express').Router();
const verifyToken = require('../midleware/validate-token'); // Middleware para verificar token
const Municipio = require('../models/Municipio'); // Modelo de Mongoose para Municipio

// Función para obtener los municipios que pertenecen a una provincia
/**
 * @swagger
 * /api/municipios/{id}:
 *   get:
 *     tags: [Municipios]
 *     summary: Obtener los municipios que pertenecen a una provincia
 *     description: Devuelve una lista de todos los municipios que pertenecen a una provincia en particular.
 *     parameters:
*       - in: path
 *         name: id
 *         required: true
 *         description: Código de la provincia.
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
 *                     description: Código del municipio.
 *                   nm:
 *                     type: string
 *                     description: Nombre del municipio.
  */
const getMunicipioFindProv = async (req, res) => {
    const prov = req.params.id;
    const municipios = await Municipio.find({ id: new RegExp(`^${prov}`)})
                                    .limit(10000)
                                    .sort({nm:1})
                                    .select('-_id id nm'); // Selecciona solo los campos id y nombre
    return res.status(200).json(municipios);
}


module.exports=getMunicipioFindProv; // Se exporta la función para que pueda ser utilizada en otras partes de la aplicación
