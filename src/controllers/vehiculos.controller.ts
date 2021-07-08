import { Request, Response } from 'express'
import { connect } from '../../database';
import { IConcesionario } from "../interface/concesionario";
import { IVehiculos } from '../interface/vehiculos';



export async function getAll(req: Request, res: Response): Promise<Response> {
    const conn = await connect();

    try {
        const vehiculos = await conn.query('SELECT * FROM vehiculos')
        return res.json(vehiculos[0]);
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        });
    }


}

export async function create(req: Request, res: Response) {
    const newDato: IVehiculos = req.body;
    const conn = await connect();

    try {
        await conn.query('INSERT INTO vehiculos SET ?', [newDato]);
        return res.json({
            success: true,
            message: 'Insertado correctamente'
        });
    } catch (error) {
        return res.json({
            success: false,
            message: 'Ocurrió un error ' + error.message
        });
    }
}


export async function getxId(req: Request, res: Response) {
    const id = req.params.Id;
    const conn = await connect();
    const marcas = await conn.query('SELECT v.*, co.nombre FROM vehiculos v inner join concesionarios co on v.concesionarioId = co.id WHERE v.id=? ', [id]);
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

    try {
        await conn.query('UPDATE vehiculos SET ? WHERE id=? ', [updateM, id]);
        return res.json({
            success: true,
            message: 'Actualizado correctamente'
        });
    } catch (error) {
        return res.json({
            success: false,
            message: 'Ocurrió un error ' + error.message
        });
    }
}






