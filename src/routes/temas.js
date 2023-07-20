const router = require('express').Router();
const {getTema,addBTema,findTema,deleteTema,updateTema, addTema} = require('../controllers/tema.controller');
const verifyToken=require('../midleware/validate-token');
const {xss} = require('express-xss-sanitizer');


router.get("/",getTema);
router.get("/:id",findTema);
   
router.post("/",xss(),verifyToken,addTema);
router.delete("/:id",xss(),verifyToken,deleteTema);
router.put("/:id",xss(),verifyToken,updateTema);



module.exports = router;