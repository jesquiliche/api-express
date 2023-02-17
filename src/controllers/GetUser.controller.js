const router = require('express').Router();
const User=require("../models/User"); // Se importa el modelo de usuario definido en el archivo User.js
const bcrypt = require('bcryptjs'); // Se importa la biblioteca bcryptjs para encriptar contraseñas
const jwt = require('jsonwebtoken'); // Se importa la biblioteca jsonwebtoken para manejar tokens JWT

// Función asíncrona que maneja la solicitud GET en la ruta /api/users
const getUser= async (req, res) => {
    
    const user = await User.find(); // Se realiza una búsqueda de todos los usuarios en la base de datos utilizando el modelo definido anteriormente
    return res.status(200).json(user); // Se devuelve una respuesta con el código de estado HTTP 200 (OK) y la lista de usuarios en formato JSON
    
}

module.exports=getUser; // Se exporta la función getUser para que pueda ser utilizada en otras partes de la aplicación Node.js
