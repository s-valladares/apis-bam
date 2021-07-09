import { Router } from 'express'
const router = Router();

import { getAll, create, getxId, deletM, UpdateM, search } from "../controllers/vehiculos.controller";

router.route('/')
    .get(getAll)
    .post(create);

router.route('/:Id')
    .get(getxId)
    .delete(deletM)
    .put(UpdateM)

router.get('/search/:Dato', search);

export default router;