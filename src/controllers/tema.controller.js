const router = require('express').Router();
const Tema=require("../models/Tema");
const Bloque=require("../models/Bloque");

//Obtener todos los temas del temario
const getTema= async (req, res) => {
    const temas = await Tema.find();
    return res.status(200).json(temas);
}

const addTema=async(req,res)=> {
    const {numero,descripcion,bloqueId}=req.body;
    
    try{
        const bloque=Bloque.findById(bloqueId);
        const newTema= new Tema({
            numero,
            descripcion,
            bloque:bloque._id
        });
        await newTema.save();
        return res.status(201).json(newTema);
    } catch(error){
        res.status(400).json({message: error});
    }

}

const updateTema=async(req,res)=> {
    const {id}=req.params;
    try{
        
        const tema=await Tema.findByIdAndUpdate(id,req.body,{ new: true });
        return res.status(200).json(tema);
    } catch(error){
        res.status(400).json({message: error});
    }

}


const findTema = async (req,res) => {
    const {id}=req.params;
    const  tema = await Bloque.findById(id,
        {"__v":0,"createdAt":0,"updatedAt":0 });
    return res.status(200).json(bloque);
}

const deleteTema = async (req,res) => {
    const {id}=req.params;
    const tema = await Bloque.findByIdAndRemove(id)
    res.status(204).json({message:"Borrado sadisfactoriamente"})
}



module.exports={
    getTema,
    addTema,
    findTema,
    deleteTema,
    updateTema
}
