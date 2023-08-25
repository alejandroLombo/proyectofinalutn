import  express from "express";
import path from "path"
import cors from 'cors';
import db from "./database/db.js";
import userRoutes from "./routes/routes.js"
import HomeRoutes from "./routes/HomeRoutes.js"
import CcRoutes from "./routes/routesCC.js"
import ClientesRouter from "./routes/ClientesRoutes.js"
import RouterZonas from "./routes/routesZonas.js"
import LoginRouter from "./routes/admin/login.js"
import Contacto from "./routes/admin/contacto.js"
import email from "./routes/admin/email.js"
import { fileURLToPath } from 'url';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';



const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(session({
  secret:'klashjdfgqwur',
  cookie: {maxAge:null},
  resave:false,
  saveUninitialized:true,
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use(cors())
app.use(express.json())
app.use('/',LoginRouter)
app.use('/contacto',Contacto)
app.use('/email',email)
app.use('/home',HomeRoutes)
app.use('/usuarios',userRoutes)
app.use('/cc',CcRoutes)
app.use('/clientes',ClientesRouter)
app.use('/zona',RouterZonas)
try { 
    await db.authenticate();
    console.log("Conexion a la DB Exitosa")
} catch (error) {
    console.log(`Conexion a la DB Fallida: ${error}`)
}




  
 const secured = async(req,res,next) =>{
    try {
      console.log(req.session.id_usuario);
      if(req.session.id_usuario){
        next();
      }else{
        res.redirect('/admin/login');
      }
    } catch (error) {
      console.log(error);
    }
  }
  

app.listen(8000,()=>{
    console.log('El servidor corre en http://localhost:8000/')
})