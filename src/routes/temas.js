const router = require('express').Router();
const {getTema,addBTema,findTema,deleteTema,updateTema, addTema} = require('../controllers/tema.controller');
const verifyToken=require('../midleware/validate-token');
const {xss} = require('express-xss-sanitizer');


router.get("/",verifyToken,getTema);
router.get("/:id",verifyToken,findTema);
   
router.post("/",xss(),verifyToken,addTema);
router.delete("/:id",xss(),verifyToken,deleteTema);
router.put("/:id",xss(),verifyToken,updateTema);



module.exports = router;