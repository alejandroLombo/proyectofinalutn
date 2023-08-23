import db from "../database/db.js";
import {DataTypes } from "sequelize";


const ClientesModels = db.define('clientes',{
    //codigo:{type: DataTypes.NUMBER,primaryKey:true,autoIncrement:true},
    nombre:{type: DataTypes.STRING},
    Direccion:{type: DataTypes.STRING},
    telefono:{type: DataTypes.STRING},
    localidad:{type: DataTypes.STRING},
    provincia:{type: DataTypes.STRING},
    cuit:{type: DataTypes.STRING},
    clihorario:{type: DataTypes.STRING},
    clihab:{type: DataTypes.BOOLEAN}
    
    
})


export default ClientesModels;

