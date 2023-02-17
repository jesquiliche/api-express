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
