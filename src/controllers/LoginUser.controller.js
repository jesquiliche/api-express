const router = require('express').Router();
const sanitize = require("mongo-sanitize");
const User=require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Función para manejar el proceso de autenticación del usuario
const loginUser= async (req, res) => {
    
    // Evitar inyección de dependencias no SQL
    req.body=sanitize(req.body);

    // Comprobar si el body cumple los requisitos del esquema
    const { error } = schemaLogin.validate(req.body);

    // En caso de error, devolver documento mal formado
    // junto con el array de errores
    if (error) return res.status(400).json({ error: error.details[0].message })
    
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
