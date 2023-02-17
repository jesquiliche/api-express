const router = require('express').Router();
const verifyToken = require('../midleware/validate-token'); // Middleware para verificar token
const Municipio = require('../models/Municipio'); // Modelo de Mongoose para Municipio

// Función para obtener los municipios que pertenecen a una provincia
const getMunicipioFindProv= async (req, res) => {
    
    const prov=req.params.id; // Se obtiene el ID de la provincia desde los parámetros de la URL
    const municipios = await  Municipio.find({ id: new RegExp(`^${prov}`)}) // Se hace una búsqueda en la base de datos de los municipios que pertenecen a esa provincia
                                    .limit(10000) // Se establece un límite alto para el número de resultados
                                    .sort({nm:1}); // Se ordenan los resultados por el nombre del municipio
    return res.status(200).json(municipios); // Se devuelve la lista de municipios en formato JSON
      
}

module.exports=getMunicipioFindProv; // Se exporta la función para que pueda ser utilizada en otras partes de la aplicación
