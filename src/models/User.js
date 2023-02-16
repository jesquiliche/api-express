const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

   
    email: {
        type:String,
        required:true
    },
    nombre: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    apellidos: {
        type:String,
        required:true
    },
    telefono: {
        type:String,
        required:true
    },
    direccion: {
        type:String,
        required:true
    },
    provincia: {
        type:String,
        required:true
    },
    poblacion: {
        type:String,
        required:true
    },
    password:{
        type: String,
        required: true,
        min:6
    },
},
{ timestamps:true}
);

// Crear el modelo
const User = mongoose.model('User', userSchema);

module.exports = User;
