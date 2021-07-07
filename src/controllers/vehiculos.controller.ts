import { Request, Response } from 'express'
import { connect } from '../../database';
import { IConcesionario } from "../interface/concesionario";



export async function getAll(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const marcas = await conn.query('SELECT * FROM vehiculos')
    return res.json(marcas[0]);
}

export async function create(req: Request, res: Response) {
    const newDato: IConcesionario = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO vehiculos SET ?', [newDato]);
    return res.json({
        message: 'true ',
        status: '200'
    });
}


export async function getxId(req: Request, res: Response) {
    const id = req.params.Id;
    const conn = await connect();
    const marcas = await conn.query('SELECT v.*,m.Nombre, con.Nombre FROM TCVehiculos v inner join TCMarcas m on v.TCMarcaId=m.id inner join TCConcesionarios con on con.id =v.TCConcesionarioId  WHERE v.id=? ', [id]);
    return res.json(marcas[0]);
}



export async function deletM(req: Request, res: Response) {
    const id = req.params.Id;
    const conn = await connect();
    await conn.query('DELETE FROM TCVehiculos WHERE id=? ', [id]);
    return res.json({
        message: 'true '
    });

}


export async function UpdateM(req: Request, res: Response) {
    const id = req.params.Id;
    const conn = await connect();
    const updateM: IConcesionario = req.body;
    await conn.query('UPDATE TCVehiculos SET ? WHERE id=? ', [updateM, id]);
    return res.json({
        message: 'true '
    });
}






