const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();


const validateLogin = [    body('email').trim().isEmail().withMessage('El correo electrónico es inválido'),    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')];


function validateL(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

module.exports= {
    validateLogin, // Exportamos el array con las validaciones para el login
    validateL // Exportamos la función middleware de validación
}
