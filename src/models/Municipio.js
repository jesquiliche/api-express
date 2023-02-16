const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const municipioSchema= new Schema({

   
    id: {
        type:String,
        required:true
        },
    nm: {
        type:String,
        required:true
        }
} 
);

// Crear el modelo
const Municipio = mongoose.model('Municipio', municipioSchema);

module.exports = Municipio;
