const User = require("../models/User");
const { validationResult } = require('express-validator'); // importar la función validationResult desde express-validator
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const encriptarContrasena = require("../midleware/encriptar-contrasena");
const { body } = require('express-validator')
const sanitize=require('mongo-sanitize');

const registerUser = async (req, res) => {
    req.body=sanitize(req.body)
 
  // extraer los datos de la solicitud
  const { nombre, email, password, apellidos, 
    telefono, direccion, poblacion, provincia } = req.body;

  // comprobar si el correo electrónico ya está registrado
  const isEmailExist = await User.findOne({ email });
  if (isEmailExist) {
    return res.status(400).json({ error: 'Email ya registrado' });
  }

  // cifrar la contraseña utilizando el middleware encriptarContrasena
  const hashedPassword = await encriptarContrasena(password);

  // crear un nuevo objeto User utilizando los datos de la solicitud y la contraseña cifrada
  const user = new User({
    nombre,
    email,
    password: hashedPassword,
    apellidos,
    telefono,
    direccion,
    poblacion,
    provincia
  });

  try {
    // guardar el usuario en la base de datos
    const savedUser = await user.save();
    res.status(201).json({
      error: null,
      data: savedUser
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = registerUser;
