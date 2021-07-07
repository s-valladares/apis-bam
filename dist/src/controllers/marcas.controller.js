"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateM = exports.deletM = exports.getxId = exports.create = exports.getMarcas = void 0;
const database_1 = require("../../database");
function getMarcas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const marcas = yield conn.query('SELECT * FROM TCMarcas');
        return res.json(marcas[0]);
    });
}
exports.getMarcas = getMarcas;
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newMarca = req.body;
        const conn = yield database_1.connect();
        yield conn.query('INSERT INTO TCMARCAS SET ?', [newMarca]);
        return res.json({
            message: 'true '
        });
    });
}
exports.create = create;
function getxId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.Id;
        const conn = yield database_1.connect();
        const marcas = yield conn.query('SELECT * FROM TCMARCAS WHERE id=? ', [id]);
        return res.json(marcas[0]);
    });
}
exports.getxId = getxId;
function deletM(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.Id;
        const conn = yield database_1.connect();
        yield conn.query('DELETE FROM TCMARCAS WHERE id=? ', [id]);
        return res.json({
            message: 'true '
        });
    });
}
exports.deletM = deletM;
function UpdateM(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.Id;
        const conn = yield database_1.connect();
        const updateM = req.body;
        yield conn.query('UPDATE TCMARCAS SET ? WHERE id=? ', [updateM, id]);
        return res.json({
            message: 'true '
        });
    });
}
exports.UpdateM = UpdateM;
