import { Router} from 'express'
const router = Router();

import { getAll,create,getxId,deletM, UpdateM } from "../controllers/concesionario.controller"; 

router.route('/')
.get(getAll)
.post(create);

router.route('/:Id')
.get(getxId)
.delete(deletM)
.put(UpdateM)
export default router;