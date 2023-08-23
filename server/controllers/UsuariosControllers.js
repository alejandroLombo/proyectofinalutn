import UserModels from "../models/UserModels.js";


 //**metodos crud */

//** Mostrar todos Registros */

    export const getAllUser = async(req,res)=>{
        try {
           const Users= await UserModels.findAll();
           res.json(Users);
        } catch (error) {
            res.json({message: error.message})
        }
    }

//** Mostrar un  Registro */
export const getUser = async(req,res)=>{
    try {
       const User= await UserModels.findAll({
        where:{
            id:req.params.id
        }
       });
       res.json(User[0]);
    } catch (error) {
        res.json({message: error.message})
    }
}

//** Crear un Registro */

export const createUser = async(req,res)=>{
    try {
       await UserModels.create(req.body);
       res.json({
        "message":"Registro Creado Correctamente"
       });
    } catch (error) {
        res.json({message: error.message})
    }
}

//** Actualizar un Registro */
export const updateUser = async(req,res)=>{
    try {
       await UserModels.update(req.body,{
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
export const deleteUser = async(req,res)=>{
    try {
       const User= await UserModels.destroy({
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