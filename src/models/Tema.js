const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bloque=require("../models/Bloque")

const temaSchema = new Schema({

    numero:{
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    bloque: [{
        type: Schema.ObjectId,
        ref:"Bloque"
    }]
}
);

// Crear el modelo
const Tema = mongoose.model('Tema', temaSchema);

module.exports = Tema;