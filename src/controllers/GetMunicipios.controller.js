const router = require('express').Router();
const verifyToken = require('../midleware/validate-token'); // Importa el middleware para verificar el token
const Municipio = require('../models/Municipio'); // Importa el modelo de Municipo

// Obtener todos los municipios
const getMunicipio = async (req, res) => {
    const municipios = await Municipio.find(); // Busca todos los municipios en la base de datos
    return res.status(200).json(municipios); // Devuelve los municipios encontrados como una respuesta en formato JSON
}

module.exports = getMunicipio; // Exporta la función de obtener todos los municipios para que pueda ser utilizada en otras partes de la aplicación
