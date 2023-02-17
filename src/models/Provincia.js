const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de la provincia
const provinciaSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    nm: {
        type: String,
        required: true
    }
});

// Crear el modelo de la provincia a partir del esquema
const Provincia = mongoose.model('Provincia', provinciaSchema);

// Exportar el modelo para su uso en otros archivos
module.exports = Provincia;
