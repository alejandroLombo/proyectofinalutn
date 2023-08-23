import CcModels from "../models/CcModels.js";
import ClientesModels from "../models/ClientesModels.js"


 //**metodos crud */

//** Mostrar todos Registros */
CcModels.belongsTo(ClientesModels,{foreignKey:'codcliente', targetKey:'id'});
    export const getAllCc = async(req,res)=>{
        try {
           const TotalC= await CcModels.findAll({
            include:[{
                model: ClientesModels,
                attributes:['nombre']
            }
        ]
           });
           res.json(TotalC);
        } catch (error) {
            res.json({message: error.message})
        }
    }

//** Mostrar un  Registro */
export const getCc = async(req,res)=>{
    try {
       const Cc= await CcModels.findAll({
        where:{
            id:req.params.id
        }
       });
       res.json(Cc[0]);
    } catch (error) {
        res.json({message: error.message})
    }
}

//** Crear un Registro */

export const createCc = async(req,res)=>{
    try {
       await CcModels.create(req.body);
       res.json({
        "message":"Registro Creado Correctamente"
       });
    } catch (error) {
        res.json({message: error.message})
    }
}

//** Actualizar un Registro */
export const updateCc = async(req,res)=>{
    try {
       await CcModels.update(req.body,{
        where:{id: req.params.id}
       });
       res.json({
        "message":"Registro Actualizado Correctamente"
       });
    } catch (error) {
        res.json({message: error.message})
    }
}
//** Eliminar un Registro */
export const deleteCc = async(req,res)=>{
    try {
       const DeleteCc= await CcModels.destroy({
        where:{
            id:req.params.id
        }
       });
       res.json({
        "message":"Registro Eliminado Correctamente"
       });
    } catch (error) {
        res.json({message: error.message})
    }
}