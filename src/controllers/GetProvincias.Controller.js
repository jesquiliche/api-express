const router = require('express').Router();
const verifyToken = require('../midleware/validate-token');
const Provincia = require('../models/Provincia');


const getProvincia= async (req, res) => {
    const provincias = await Provincia.find().limit(100).sort({nm:1});
    return res.json(provincias);
      
}

module.exports=getProvincia;
