const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const provinciaSchema= new Schema({

   
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
const Provincia = mongoose.model('Provincia', provinciaSchema);

module.exports = Provincia;
