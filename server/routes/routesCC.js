import  express  from "express";
import {getAllCc,getCc,createCc,updateCc,deleteCc} from "../controllers/CcControllers.js";

const router = express.Router();

router.get('/',getAllCc);
router.get('/:id',getCc);
router.post('/',createCc);
router.put('/:id',updateCc);
router.delete('/:id',deleteCc);

export default router;
