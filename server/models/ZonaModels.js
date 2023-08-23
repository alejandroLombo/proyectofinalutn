import db from "../database/db.js";
import {DataTypes } from "sequelize";

const ZonaModels = db.define('zonas',{
    zona:{type: DataTypes.STRING},
    
})

export default ZonaModels;