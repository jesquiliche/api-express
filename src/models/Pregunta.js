const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define el esquema para la colección de preguntas
const preguntaSchema = new Schema({
    // Define los campos para cada pregunta
    numero: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true,
    },
    respuesta: {
        a: {
            type: String,
            required: true
        },
        b: {
            type: String,
            required: true
        },
        c: {
            type: String,
            required: true
        },
        d: {
            type: String,
            required: true
        }
    }
},
// Agrega las fechas de creación y actualización
{ timestamps:true}
);

// Crea el modelo para la colección de preguntas
module.exports = mongoose.model('Pregunta', preguntaSchema);; 
