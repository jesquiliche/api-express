const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *   schemas:
 *     Bloque:
 *       type: object
 *       required:
 *         - numero
 *         - descripcion
 *       properties:
 *         numero:
 *           type: number
 *           description: Número del bloque.
 *         descripcion:
 *           type: string
 *           description: Descripción del bloque.
 *         temas:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Temas'
 *           description: Array de temas relacionados con el bloque.
 *       example:
 *         numero: 1
 *         descripcion: Introducción a la programación
 *         temas: [5f71d40c8b7b28399465c548, 5f71d40c8b7b28399465c549]
 *     Temas:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Id del tema.
 *         nombre:
 *           type: string
 *           description: Nombre del tema.
 *       example:
 *         _id: 5f71d40c8b7b28399465c548
 *         nombre: Programación orientada a objetos
 */

// Definir el esquema de Bloque
const bloqueSchema = new Schema({
    // Campo numero
    numero: {
        type: Number,
        required: true
    },
    // Campo descripcion
    descripcion: {
        type: String,
        required: true
    },
    // Relación con Temas mediante un array de ObjectId
    temas: [{
        type: Schema.Types.ObjectId,
        ref: "temas"
    }]
},
{ 
    timestamps: true 
});

// Crear el modelo Bloque a partir del esquema
const Bloque = mongoose.model('Bloque', bloqueSchema);

module.exports = Bloque;
