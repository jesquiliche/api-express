const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

// Middleware para validar los campos del bloque
const validateBloque = [    body('numero').isNumeric().withMessage('El campo numero debe ser un número'),    body('descripcion').notEmpty().isString().withMessage('El campo descripción debe ser una cadena de caracteres')];

// Función middleware de validación para
//verificar si hubo errores en la validación
function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

module.exports= {
  validateBloque,
  validate
}
