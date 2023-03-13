const router = require('express').Router();
const sanitize = require("mongo-sanitize");
const User=require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body ,validationResult} = require('express-validator')


/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Iniciar sesión con email y contraseña
 *     parameters:
 *       - in: header
 *         name: auth-token
 *         schema:
 *           type: string
 *         required: true
 *         description: Token de autenticación válido.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *                 example: usuario3@ejemplo.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *                 example: 123456
 *     responses:
 *       '200':
 *         description: Usuario autenticado satisfactoriamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: null
 *                   description: El error es nulo
 *                   example: null
 *                 data:
 *                   type: object
 *                   description: Objeto con el token JWT
 *                   properties:
 *                     token:
 *                       type: string
 *                       description: Token JWT generado al autenticarse
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJOb21icmUiLCJpZCI6IjY0MGUzY2I0NWZkMGFkY2FjNDk1N2FhOCIsImlhdCI6MTY3ODY1NDc0MywiZXhwIjoxNjc4NjU4MzQzfQ.Z1425hwj57LJ8_aylZM8Odh_OgbMGVmxipDANFeb4CE
 *       '422':
 *         description: Error de validación de los datos de entrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   description: Lista de errores de validación
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         description: Descripción del error
 *                         example: "La contraseña debe tener al menos 6 caracteres"
 *                       param:
 *                         type: string
 *                         description: Nombre del parámetro que falló la validación
 *                         example: "password"
 *                       location:
 *                         type: string
 *                         description: Ubicación del parámetro que falló la validación
 *                         example: "body"
 *       '500':
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Descripción del error interno del servidor
 *                   example: "Error interno del servidor"
 */

// Función para manejar el proceso de autenticación del usuario
const loginUser= async (req, res) => {
    
    // Evitar inyección de dependencias no SQL
    req.body=sanitize(req.body);
 
    
    
    // Comprobar a través del email si el usuario existe en la BBDD
    const user = await User.findOne({ email: req.body.email });

    // Si no existe, devolver error
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    // Comprobar el password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
    
    // Obtener token con tiempo de expiración de una hora
    const token = jwt.sign({
        nombre: user.nombre,
        id: user._id
        }, process.env.TOKEN_SECRET,{
            expiresIn: '1h' 
        })
    
   // Devolver token al cliente
   res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
}

module.exports=loginUser;
