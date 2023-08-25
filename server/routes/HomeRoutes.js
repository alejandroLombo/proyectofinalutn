import  express  from "express";
import {getTotalClientes,getTotalZonas,getTotalUser,getSaldosPorZona} from "../controllers/HomeControllers.js";
const router = express.Router();

router.get('/',getTotalClientes);
router.get('/getTotalZonas',getTotalZonas);
router.get('/getTotalUser',getTotalUser);
router.get('/getSaldosPorZona',getSaldosPorZona);



export default router;