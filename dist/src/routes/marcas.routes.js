"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const marcas_controller_1 = require("../controllers/marcas.controller");
router.route('/')
    .get(marcas_controller_1.getMarcas)
    .post(marcas_controller_1.create);
router.route('/:Id')
    .get(marcas_controller_1.getxId)
    .delete(marcas_controller_1.deletM)
    .put(marcas_controller_1.UpdateM);
exports.default = router;
