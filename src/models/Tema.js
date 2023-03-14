const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bloque = require("../models/Bloque");

/**
 * @swagger
 * components:
 *   schemas:
 *     Tema:
 *       type: object
 *       required:
 *         - numero
 *         - descripcion
 *       properties:
 *         numero:
 *           type: number
 *           description: Número del tema
 *         descripcion:
 *           type: string
 *           description: Descripción del tema
 *         bloque:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Bloque'
 *           description: Arreglo de bloques relacionados al tema
 *       example:
 *         numero: 1
 *         descripcion: Tema de prueba
 *         bloque: []
 * 
 *     Bloque:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre del bloque
 *       example:
 *         nombre: Bloque de prueba
 */


// Crear un esquema para un tema
const temaSchema = new Schema({
    numero: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    bloque: [{
        type: Schema.ObjectId,
        ref: "Bloque" // Establecer la relación con el modelo Bloque
    }]
});

// Crear el modelo a partir del esquema
const Tema = mongoose.model('Tema', temaSchema);

// Exportar el modelo para su uso en otras partes de la aplicación
module.exports = Tema;
