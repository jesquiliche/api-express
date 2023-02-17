const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

// Definir la función middleware de validación para el usuario
const validateUser = [    body('nombre').trim().notEmpty().withMessage('El nombre es requerido'),    body('apellidos').trim().notEmpty().withMessage('Los apellidos requerido'),    body('email').trim().isEmail().withMessage('El correo electrónico es inválido'),    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')];

// La función middleware de validación
function validateU(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

module.exports= {
    validateUser, // se exporta la variable de validación del usuario
    validateU // se exporta la función de middleware de validación del usuario
}
