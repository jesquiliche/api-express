const router = require('express').Router();
const {getBloque,addBloque,findBloque,deleteBloque,updateBloque} = require('../controllers/bloque.controller');
const verifyToken=require('../midleware/validate-token');
const {xss} = require('express-xss-sanitizer');
const {validateBloque,validate}=require('../midleware/validateBloque');
//const { validate } = require('../models/Bloque');



router.get("/",getBloque);
router.get("/:id",findBloque);
   
router.post("/",xss(),verifyToken,validateBloque,validate,addBloque);
router.delete("/:id",xss(),verifyToken,deleteBloque);
router.put("/:id",xss(),verifyToken,updateBloque);



module.exports = router;