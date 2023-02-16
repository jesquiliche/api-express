const router = require('express').Router();
const verifyToken = require('../midleware/validate-token');
const User=require("../models/User");


const getUserFilter= async (req, res) => {
    const nombre=req.body.nombre;
    const email = req.body.email;
    const apellidos=req.body.apellidos;
    const user = await User.find({ $or: [{ nombre }, { email }, { apellidos }] })
    return res.status(200).json(user);
      
}

module.exports=getUserFilter;