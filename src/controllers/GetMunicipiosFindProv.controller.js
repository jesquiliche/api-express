const router = require('express').Router();
const verifyToken = require('../midleware/validate-token');
const Municipio = require('../models/Municipio');



const getMunicipioFindProv= async (req, res) => {
    
    const prov=req.params.id;
    const municipios = await  Municipio.find({ id: new RegExp(`^${prov}`)}).limit(10000).sort({nm:1});
    return res.status(200).json(municipios);
      
}


module.exports=getMunicipioFindProv

