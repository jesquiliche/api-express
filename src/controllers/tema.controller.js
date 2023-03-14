const router = require("express").Router(); // Importar el enrutador de Express
const Tema = require("../models/Tema"); // Importar el modelo Tema
const Bloque = require("../models/Bloque"); // Importar el modelo Bloque

/**
 * @swagger
 * /api/tema:
 *   get:
 *     summary: Obtener todos los temas del temario
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Temas
 *     parameters:
 *       - in: header
 *         name: auth-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación
 *     responses:
 *       '200':
 *         description: Lista de todos los temas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tema'
 */

// Obtener todos los temas del temario
const getTema = async (req, res) => {
  const temas = await Tema.find(); // Buscar todos los temas
  return res.status(200).json(temas); // Devolver una respuesta con código 200 y los temas encontrados
};

/**
 * @swagger
 * /api/tema:
 *   post:
 *     summary: Crea un nuevo tema y lo guarda en la base de datos
 *     tags: [Temas]
 *     parameters:
 *       - in: header
 *         name: auth-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numero:
 *                 type: integer
 *                 description: Número del tema
 *               descripcion:
 *                 type: string
 *                 description: Descripción del tema
 *               bloqueId:
 *                 type: string
 *                 description: ID del bloque al que pertenece el tema
 *     responses:
 *       '201':
 *         description: Tema creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tema'
 *       '401':
 *         description: Acceso denegado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Acceso denegado
 *       '400':
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *     security:
 *       - auth-token: []
 */

const addTema = async (req, res) => {
  const { numero, descripcion, bloqueId } = req.body; // Extraer el número, la descripción y el ID del bloque del cuerpo de la solicitud

  try {
    const bloque = Bloque.findById(bloqueId); // Buscar el bloque con el ID proporcionado
    const newTema = new Tema({
      // Crear un nuevo objeto Tema
      numero,
      descripcion,
      bloque: bloque._id, // Asignar el ID del bloque al tema
    });
    await newTema.save(); // Guardar el tema en la base de datos
    return res.status(201).json(newTema); // Devolver una respuesta con código 201 y el tema creado
  } catch (error) {
    res.status(400).json({ message: error }); // Devolver una respuesta de error con código 400 y un mensaje de error
  }
};

/**
 * @swagger
 * /api/tema/{id}:
 *   put:
 *     summary: Actualiza un tema existente
 *     tags: [Temas]
 *     parameters:
 *       - in: header
 *         name: auth-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del tema a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numero:
 *                 type: integer
 *                 description: Número del tema
 *               description:
 *                 type: string
 *                 description: Descripción del tema
 *               bloqueId:
 *                 type: string
 *                 description: ID del bloque al que pertenece el tema
 *     responses:
 *       '200':
 *         description: Tema actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tema'
 *       '401':
 *         description: Acceso denegado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Acceso denegado
 *       '400':
 *         description: Error en al actualizar
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *       '404':
 *         description: No se encuentra el tema
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *     security:
 *       - auth-token: []
 */

const updateTema = async (req, res) => {
  const { id } = req.params; // Extraer el ID del tema de los parámetros de la solicitud
  try {
    const tema = await Tema.findByIdAndUpdate(id, req.body, { new: true }); // Buscar y actualizar el tema con el ID proporcionado
    return res.status(200).json(tema); // Devolver una respuesta con código 200 y el tema actualizado
  } catch (error) {
    res.status(400).json({ message: error }); // Devolver una respuesta de error con código 400 y un mensaje de error
  }
};

/**
 * @swagger
 * /api/tema/{id}:
 *   get:
 *     summary: Obtener un tema por ID
 *     tags: [Temas]
 *     parameters:
 *       - in: header
 *         name: auth-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del tema a buscar
 *     responses:
 *       '200':
 *         description: Tema encontrado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tema'
 *       '401':
 *         description: Acceso denegado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Acceso denegado
 *         '404':
 *           description: No se encuentra el tema
 *           content:
 *              application/json:
 *                  schema:
 *                  type: object
 *                  properties:
 *                  message:
 *                      type: string
 *                      description: Mensaje de error
 *     security:
 *       - auth-token: []
 */

const findTema = async (req, res) => {
  const { id } = req.params; // Extraer el ID del bloque de los parámetros de la solicitud
  const tema = await Bloque.findById(
    id, // Buscar el bloque con el ID proporcionado
    { __v: 0, createdAt: 0, updatedAt: 0 }
  ); // Omitir los campos __v, createdAt y updatedAt
  return res.status(200).json(bloque); // Devolver una respuesta con código 200 y el bloque encontrado
};

/**
 * @swagger
 * /api/tema/{id}:
 *   delete:
 *     summary: Elimina un tema existente
 *     tags: [Temas]
 *     parameters:
 *       - in: header
 *         name: auth-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del tema a eliminar
 *     responses:
 *       '204':
 *         description: Tema eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *       '401':
 *         description: Acceso denegado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Acceso denegado
 *       '404':
 *         description: No se encuentra el tema
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 *     security:
 *       - auth-token: []
 */

const deleteTema = async (req, res) => {
  const { id } = req.params; // Extraer el ID del bloque de los parámetros de la solicitud
  const tema = await Bloque.findByIdAndRemove(id); // Buscar y eliminar el bloque con el ID proporcionado
  res.status(204).json({ message: "Borrado sadisfactoriamente" }); // Devolver una respuesta con código 204 y un mensaje de éxito
};

// Exportar las funciones para ser utilizadas en otras partes de la aplicación
module.exports = {
  getTema,
  addTema,
  findTema,
  deleteTema,
  updateTema,
};
