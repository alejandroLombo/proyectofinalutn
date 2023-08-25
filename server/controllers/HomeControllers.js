//import { Sequelize } from "sequelize";
import db from "../database/db.js";
import ClientesModels from "../models/ClientesModels.js";
import ZonaModels from "../models/ZonaModels.js";
import UserModels from "../models/UserModels.js";
import CcModels from "../models/CcModels.js";




export const getTotalClientes = async(req,res)=>{
    try {
       const TotalCli= await ClientesModels.count();
       res.json(TotalCli);
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getTotalZonas = async(req,res)=>{
    try {
       const TotalZonas= await ZonaModels.count();
       res.json(TotalZonas);
    } catch (error) {
        res.json({message: error.message})
    }
}
export const getTotalUser = async(req,res)=>{
    try {
       const TotalUser= await UserModels.count();
       res.json(TotalUser);
    } catch (error) {
        res.json({message: error.message})
    }
}

/* export const getSaldos = async(req,res)=>{
    try {
       const TotalSaldos= await CcModels.findOne({
        attributes: [
            [db.Sequelize.fn('sum', db.Sequelize.col('saldo')), 'totalSum']
          ]
       });
       res.json(TotalSaldos.dataValues.totalSum);
    } catch (error) {
        res.json({message: error.message})
    }
} */


export const getSaldosPorZona = async (req, res) => {
  try {
    const totalSaldosZona1 = await CcModels.findOne({
      attributes: [
        [db.Sequelize.fn('sum', db.Sequelize.col('saldo')), 'totalSum']
      ],
      where: {
        zona: 1 // Filtrar por zona = 1
      }
    });

    const totalSaldosZona2 = await CcModels.findOne({
      attributes: [
        [db.Sequelize.fn('sum', db.Sequelize.col('saldo')), 'totalSum']
      ],
      where: {
        zona: 2 // Filtrar por zona = 2
      }
    });

    res.json({
      totalSaldosZona1: totalSaldosZona1.dataValues.totalSum,
      totalSaldosZona2: totalSaldosZona2.dataValues.totalSum
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
