
const conectaDb=async ()=>{
require("dotenv").config();
const mongoose = require('mongoose');


//const uri = `mongodb://localhost/temario`

mongoose.set('strictQuery', false);
const user=process.env.DB_USER;
const password=process.env.DB_PASSWORD;

const uri=`mongodb+srv://${user}:${password}@cluster0.m14ql.mongodb.net/temario?authSource=admin&replicaSet=atlas-jjcdpd-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true`

//const uri = `mongodb+srv://${user}:${password}@cluster0.m14ql.mongodb.net/temario?authSource=admin&replicaSet=atlas-jjcdpd-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`;

await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
 // .then(()=> console.log('conectado a mongodb')) 
 // .catch(e => console.log('error de conexión', e))

}

module.exports=conectaDb;