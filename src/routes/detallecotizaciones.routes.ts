import { Router} from 'express'
const router = Router();

import { getAll,create,getxId,deletM, UpdateM, getxIdDetalle } from "../controllers/detallecotizaciones.controller"; 

router.route('/')
.get(getAll)
.post(create);

router.route('/:Id')
.get(getxId)
.delete(deletM)
.put(UpdateM)

 router.get('/detalle/:Id',getxIdDetalle);

export default router;