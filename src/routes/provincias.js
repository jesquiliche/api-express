const router = require('express').Router();

const GetProvincia=require("../controllers/GetProvincias.Controller");


router.get('/',GetProvincia);




module.exports = router;