const router = require('express').Router();
const registerUser = require("../controllers/RegisteUser.Controller");
const loginUser=require("../controllers/LoginUser.controller");
const getUser=require("../controllers/GetUser.controller");
const FindUser=require("../controllers/FindUser.controller");
const UpdateUser=require("../controllers/UpdateUser.Controller");
const DeleteUser=require("../controllers/DeleteUser.controller");
const getUserFilter = require('../controllers/GetUserFilter.controller');
const verifyToken=require('../midleware/validate-token');
const {xss} = require('express-xss-sanitizer');
const {validateUser,validateU}=require('../midleware/validateUser');
const {validateLogin,validateL}=require('../midleware/validateLogin');

router.post('/register',xss(),validateUser,validateU, registerUser);

router.post('/login',xss(),validateLogin,validateL, loginUser);

router.get("/",getUser);
router.post("/filter",xss(),verifyToken,getUserFilter);

router.get("/:id",xss(),FindUser);
router.put("/:id",xss(),verifyToken,UpdateUser)
router.delete("/:id",xss(),verifyToken,DeleteUser)
   



module.exports = router;