import  express  from "express";
import {getAllZona,getZona,createZona,updateZona,deleteZona} from "../controllers/zonaControllers.js";
const router = express.Router();

router.get('/',getAllZona);
router.get('/:id',getZona);
router.post('/',createZona);
router.put('/:id',updateZona);
router.delete('/:id',deleteZona);

export default router;
