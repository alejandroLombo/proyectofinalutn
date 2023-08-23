import  express from "express";
import cors from 'cors';
import db from "./database/db.js";
import userRoutes from "./routes/routes.js"
import CcRoutes from "./routes/routesCC.js"
import ClientesRouter from "./routes/ClientesRoutes.js"
import RouterZonas from "./routes/routesZonas.js"

const app = express();
app.use(cors())
app.use(express.json())
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

app.get('/',(req,res)=>{
    res.send('hola mundo lo logreee!')
})

app.listen(8000,()=>{
    console.log('El servidor corre en http://localhost:8000/')
})