import ClientesModels from "../models/ClientesModels.js";

//** Mostrar todos Registros */

export const getAllClientes = async(req,res)=>{
    try {
       const TotalCli= await ClientesModels.findAll();
       res.json(TotalCli);
    } catch (error) {
        res.json({message: error.message})
    }
}

//** Mostrar un  Registro */
export const getCliente = async(req,res)=>{
try {
   const Cliente= await ClientesModels.findAll({
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

export const createCliente = async(req,res)=>{
try {
   await ClientesModels.create(req.body);
   res.json({
    "message":"Registro Creado Correctamente"
   });
} catch (error) {
    res.json({message: error.message})
}
}

//** Actualizar un Registro */
export const updateCliente = async(req,res)=>{
try {
   await ClientesModels.update(req.body,{
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
export const deleteCliente = async(req,res)=>{
try {
   const DeleteCliente= await ClientesModels.destroy({
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