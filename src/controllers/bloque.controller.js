const router = require('express').Router();
const verifyToken = require('../midleware/validate-token');
const Bloque=require("../models/Bloque");

//Obtener todos los bloques del temario
const getBloque= async (req, res) => {
    const bloque = await Bloque.find();
    return res.status(200).json(bloque);
}

const addBloque=async(req,res)=> {

    try{
        const newBloque= new Bloque(req.body);
        await newBloque.save();
        return res.status(201).json(newBloque);
    } catch(error){
        res.status(400).json({message: error});
    }

}

const updateBloque=async(req,res)=> {
    const {id}=req.params;
    try{
        
        const bloque=await Bloque.findByIdAndUpdate(id,req.body,{ new: true });
        return res.status(200).json(bloque);
    } catch(error){
        res.status(400).json({message: error});
    }

}


const findBloque = async (req,res) => {
    const {id}=req.params;
    const  bloque = await Bloque.findById(id,
        {"__v":0,"createdAt":0,"updatedAt":0 });
    return res.status(200).json(bloque);
}

const deleteBloque = async (req,res) => {
    const {id}=req.params;
    const bloque = await Bloque.findByIdAndRemove(id)
    res.status(204).json({message:"Borrado sadisfactoriamente"})
}



module.exports={
    getBloque,
    addBloque,
    findBloque,
    deleteBloque,
    updateBloque
}
