import { Router } from 'express'
const router = Router();

import { getAll, create, getxId, deletM, UpdateM, CotizacionesRp } from "../controllers/cotizaciones.controller";

router.route('/')
    .get(getAll)
    .post(create);

router.route('/:Id')
    .get(getxId)
    .delete(deletM)
    .put(UpdateM)

router.post('/todo', CotizacionesRp);

export default router;