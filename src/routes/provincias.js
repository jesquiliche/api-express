const router = require('express').Router();
const verifyToken=require('../midleware/validate-token');
const GetProvincia=require("../controllers/GetProvincias.Controller");


router.get('/',verifyToken,GetProvincia);




module.exports = router;