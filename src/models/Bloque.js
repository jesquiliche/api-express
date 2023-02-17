const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
