const conectaDb = require('./mongoose');


const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const mongoose=require("./mongoose")
require('dotenv').config();
//Configurar proteccion ataques inyección XSS
const {xss} = require('express-xss-sanitizer');
app.use(xss());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const cors = require('cors');

app.use(cors());


app.set("port",process.env.PORT || 3001);

// import routes
const authRoutes = require('./routes/auth');
const provinciasRoutes = require('./routes/provincias')
const municipiosRoutes = require('./routes/municipios')
const municipiosProvRoutes=require('./routes/municipios')
const temasRoutes=require('./routes/temas')
const bloqueRoutes=require("./routes/bloque")

// route middlewares
app.use('/api/user', authRoutes);
app.use('/api/provincias', provinciasRoutes);
app.use('/api/municipios', municipiosRoutes);
app.use('/api/municipios/:id', municipiosProvRoutes);
app.use('/api/bloque',bloqueRoutes);
app.use('/api/tema',temasRoutes);





app.get("/",function(req, res) {
    res.send('hello world');
    console.log("Entro")
  });

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});


const verifyToken = require('./midleware/validate-token');
conectaDb();


app.listen(app.get("port"),async ()=>{
   // await console.log("Server express on port "+app.get("port"));
});

