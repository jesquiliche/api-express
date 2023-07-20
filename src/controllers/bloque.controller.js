const router = require('express').Router();
const verifyToken = require('../midleware/validate-token');
const Bloque = require('../models/Bloque');

/**
 * @swagger
 * 
 * /api/bloque:
 * 
 *   get:
 *     summary: Obtiene todos los bloques
 *     description: Retorna un arreglo con todos los bloques.
 *     tags: [Bloques]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Arreglo de todos los bloques.
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Bloque'
 *       500:
 *         description: Error interno del servidor.
*/



// Handler para obtener todos los bloques del temario
const getBloque = async (req, res) => {
  const bloque = await Bloque.find();
  return res.status(200).json(bloque);
};

/**
 * @swagger
 * /api/bloque:
 *   post:
 *     summary: Agrega un nuevo bloque
 *     description: Agrega un nuevo bloque a la base de datos.
 *     tags:
 *       - Bloques
 *     parameters:
 *       - in: header
 *         name: auth-token
 *         description: Token de autenticación.
 *         required: true
 *         type: string
 *     requestBody:
 *       description: Objeto con los datos del nuevo bloque.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bloque'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: Objeto con los datos del nuevo bloque agregado.
 *         schema:
 *           $ref: '#/components/schemas/Bloque'
 *       400:
 *         description: Error de validación al agregar el nuevo bloque.
 *       401:
 *         description: Error de autenticación.
 *       500:
 *         description: Error interno del servidor.
 *     security:
 *         - auth-token: []
 */

// Handler para agregar un nuevo bloque
const addBloque = async (req, res) => {
  try {
    const newBloque = new Bloque(req.body);
    await newBloque.save();
    return res.status(201).json(newBloque);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

/**
 * @swagger
 *
 * /api/bloque/{id}:
 *   put:
 *     summary: Actualiza un bloque existente por su ID
 *     description: Actualiza un bloque existente identificado por su ID con los nuevos datos proporcionados en el cuerpo de la solicitud.
 *     tags: [Bloques]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del bloque que se desea actualizar.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Campos para actualizar el bloque.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bloque'
 *     responses:
 *       200:
 *         description: Bloque actualizado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bloque'
 *       400:
 *         description: Error en los datos proporcionados.
 *       404:
 *         description: Bloque no encontrado.
 *       500:
 *         description: Error interno del servidor.
 *     security:
 *         - auth-token: []
 */

// Handler para actualizar un bloque existente
const updateBloque = async (req, res) => {
  const { id } = req.params;
  try {
    const bloque = await Bloque.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(bloque);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

/**
 * @swagger
 * /api/bloque/{id}:
 *   get:
 *     summary: Obtiene un bloque por su ID
 *     description: Retorna un objeto con los datos del bloque solicitado mediante su ID.
 *     tags: [Bloques]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del bloque a buscar.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Objeto con los datos del bloque solicitado.
 *         schema:
 *           $ref: '#/components/schemas/Bloque'
 *       400:
 *         description: Error en la petición o bloque no encontrado.
 *       500:
 *         description: Error interno del servidor.
  */

const findBloque = async (req, res) => {
  const { id } = req.params;
  try {
    const bloque = await Bloque.findOne({ numero: id });
    if (!bloque) {
      return res.status(404).json({ error: 'Bloque no encontrado' });
    }
    return res.status(200).json(bloque);
  } catch (error) {
    console.error('Error al buscar el bloque:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};


/**
 * @swagger
 * /api/bloque/{id}:
 *   delete:
 *     summary: Borra un bloque por su ID
 *     description: Borra un objeto con los datos del bloque solicitado mediante su ID.
 *     tags: [Bloques]
 *     parameters:
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
 *         description: ID del bloque a borrar.
 *     produces:
 *       - application/json
 *     responses:
 *       204:
 *         description: Objeto con los datos del bloque ha borrar.
 *         schema:
 *           $ref: '#/components/schemas/Bloque'
 *       400:
 *         description: Error en la petición o bloque no encontrado.
 *       500:
 *         description: Error interno del servidor.
 *     security:
 *         - auth-token: [] 
 */


// Handler para eliminar un bloque por su ID
const deleteBloque = async (req, res) => {
  const { id } = req.params;
  const bloque = await Bloque.findByIdAndRemove(id);
  res.status(204).json({ message: 'Borrado satisfactoriamente' });
};

// Exportamos todos los handlers en un objeto
module.exports = {
  getBloque,
  addBloque,
  findBloque,
  deleteBloque,
  updateBloque
};
