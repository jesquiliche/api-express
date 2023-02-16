const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const preguntaSchema = new Schema({

    //bloque: ObjectId,
    //temario: ObjectId,
    numero: {type:Number, required:true},
    descripcion:{
        type: String,
        required: true,
    },
    respuesta: {
        a: {
            type:String,
            required:true
            },
        b: {
            type:String,
            required:true
            },
        c: {
            type:String,
            required:true
            },
        d: {
            type:String,
            required:true
            }
    }
},
{ timestamps:true}
);

// Crear el modelo
//const pregunta = mongoose.model('Pregunta', preguntaSchema);

module.exports = mongoose.model('Pregunta', preguntaSchema);;