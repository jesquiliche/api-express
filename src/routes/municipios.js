const router = require('express').Router();

const GetMunicipio=require("../controllers/GetMunicipios.controller");
const GetMunicipioProv=require("../controllers/GetMunicipiosFindProv.controller");

router.get('/',GetMunicipio);

router.get("/:id",GetMunicipioProv)


module.exports = router;