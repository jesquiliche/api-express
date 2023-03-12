/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - nombre
 *         - password
 *         - apellidos
 *         - telefono
 *         - direccion
 *         - provincia
 *         - poblacion
 *       properties:
 *         email:
 *           type: string
 *           description: Email del usuario
 *         nombre:
 *           type: string
 *           description: Nombre del usuario
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *         apellidos:
 *           type: string
 *           description: Apellidos del usuario
 *         telefono:
 *           type: string
 *           description: Teléfono del usuario
 *         direccion:
 *           type: string
 *           description: Dirección del usuario
 *         provincia:
 *           type: string
 *           description: Provincia del usuario
 *         poblacion:
 *           type: string
 *           description: Población del usuario
 *       example:
 *         email: usuario@ejemplo.com
 *         nombre: Nombre
 *         password: 123456
 *         apellidos: Apellidos
 *         telefono: 123456789
 *         direccion: Dirección
 *         provincia: Provincia
 *         poblacion: Población
 */



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema de usuario
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    apellidos: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    provincia: {
        type: String,
        required: true
    },
    poblacion: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Crear el modelo de usuario
const User = mongoose.model('User', userSchema);

// Exportar el modelo
module.exports = User;
