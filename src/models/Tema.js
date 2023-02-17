const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bloque = require("../models/Bloque");

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
