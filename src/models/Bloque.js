const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bloqueSchema = new Schema({

    numero:{
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    temas: [{
        type:Schema.Types.ObjectId,
        ref:"temas"
    }]
},
{ timestamps:true}
);

// Crear el modelo
const Bloque = mongoose.model('Bloque', bloqueSchema);

module.exports = Bloque;