import { Router } from 'express'
const router = Router();

import { getAll, create, getxId, deletM, UpdateM, searchByDate, search } from "../controllers/cotizaciones.controller";

router.route('/')
    .get(getAll)
    .post(create);

router.route('/:Id')
    .get(getxId)
    .delete(deletM)
    .put(UpdateM)

router.get('/fecha/:fechaInicio/:fechaFin', searchByDate);

router.get('/search/:Dato', search);


export default router;