const router = require('express').Router();
const {getBloque,addBloque,findBloque,deleteBloque,updateBloque} = require('../controllers/bloque.controller');
const verifyToken=require('../midleware/validate-token');
const {xss} = require('express-xss-sanitizer');



router.get("/",verifyToken,getBloque);
router.get("/:id",verifyToken,findBloque);
   
router.post("/",xss(),verifyToken,addBloque);
router.delete("/:id",xss(),verifyToken,deleteBloque);
router.put("/:id",xss(),verifyToken,updateBloque);



module.exports = router;