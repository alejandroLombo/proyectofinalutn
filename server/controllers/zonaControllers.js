import ZonaModels from "../models/ZonaModels.js";


 //**metodos crud */

//** Mostrar todos Registros */

    export const getAllZona = async(req,res)=>{
        try {
           const Zona= await ZonaModels.findAll();
           res.json(Zona);
        } catch (error) {
            res.json({message: error.message})
        }
    }

//** Mostrar un  Registro */
export const getZona = async(req,res)=>{
    try {
       const Zona= await ZonaModels.findAll({
        where:{
            id:req.params.id
        }
       });
       res.json(Zona[0]);
    } catch (error) {
        res.json({message: error.message})
    }
}

//** Crear un Registro */

export const createZona = async(req,res)=>{
    try {
       await ZonaModels.create(req.body);
       res.json({
        "message":"Registro Creado Correctamente"
       });
    } catch (error) {
        res.json({message: error.message})
    }
}

//** Actualizar un Registro */
export const updateZona = async(req,res)=>{
    try {
       await ZonaModels.update(req.body,{
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
export const deleteZona = async(req,res)=>{
    try {
       const Zona= await ZonaModels.destroy({
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