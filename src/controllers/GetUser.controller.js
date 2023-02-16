const router = require('express').Router();
const User=require("../models/User");
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const getUser= async (req, res) => {
    
    const user = await User.find();
    return res.status(200).json(user);
      
}

module.exports=getUser;