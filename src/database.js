import mongoose from "mongoose"; 
import {MONGODB_URI} from './config'

   /* (async () =>{
    try {
        const conn= await mongoose.connect(MONGODB_URI);
        console.log("ok")
      } catch (error) {
        console.error(error);
      }})();*/

    (async () =>{
        await mongoose.connect(MONGODB_URI)
          .then (db => console.log("ok"))
          .catch (err =>console.log(err));   
    })();


   
//module.exports= conn;

/*var mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/ubikt', {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true
    }).then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err))
import mongoose  from "mongoose";

const MONGO_URL = "mongodb://0.0.0.0:27017/prueba";

const db = async () => {
    await mongoose
        .connect(MONGO_URL)
        .then(() => console.log("DB funcionando"))
        .catch((error) => console.error(error));
};

module.exports = db;*/

