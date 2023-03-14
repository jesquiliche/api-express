const router = require('express').Router();
const verifyToken=require('../midleware/validate-token');
const GetMunicipio=require("../controllers/GetMunicipios.controller");
const GetMunicipioProv=require("../controllers/GetMunicipiosFindProv.controller");

router.get('/',verifyToken,GetMunicipio);

router.get("/:id",verifyToken,GetMunicipioProv)


module.exports = router;