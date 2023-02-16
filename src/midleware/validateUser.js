const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

// Definir la función middleware de validación
const validateUser = [
    body('nombre').trim().notEmpty().withMessage('El nombre es requerido'),
    body('apellidos').trim().notEmpty().withMessage('Los apellidos requerido'),
    body('email').trim().isEmail().withMessage('El correo electrónico es inválido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
];

// La función middleware de validación
function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

module.exports= {
    validateUser
}
