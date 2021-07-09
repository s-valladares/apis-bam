import { Request, Response } from 'express'
import { connect } from '../../database';
import { IClientes } from "../interface/clientes";



export async function getAll(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const clientes = await conn.query('SELECT * FROM clientes')
    return res.json(clientes[0]);
}

export async function create(req: Request, res: Response) {
    const newDato: IClientes = req.body;
    const conn = await connect();
    try {
        await conn.query('INSERT INTO clientes SET ?', [newDato]);
        return res.json({
            success: true,
            message: 'Ingresado correctamente'
        });
    } catch (error) {
        return res.json({
            succes: false,
            message: 'Ocurrió un error ' + error.message
        });
    }
}


export async function getxId(req: Request, res: Response) {
    const id = req.params.Id;
    const conn = await connect();

    try {
        const clientes = await conn.query('SELECT cl.*, con.nombre as tienda from clientes cl inner join concesionarios con on con.id = cl.concesionarioId WHERE cl.id=? ', [id]);
        return res.json(clientes[0]);
    } catch (error) {
        return res.json({
            success: false,
            message: 'Ocurrió un error ' + error.message
        });
    }
}



export async function deletM(req: Request, res: Response) {
    const id = req.params.Id;
    const conn = await connect();


    try {
        await conn.query('DELETE FROM clientes WHERE id=? ', [id]);
        return res.json({
            success: true,
            message: 'Eliminado correctamente '
        });
    } catch (error) {
        return res.json({
            success: false,
            message: 'Error: ' + error.message
        });
    }

}


export async function UpdateM(req: Request, res: Response) {
    const id = req.params.Id;
    const conn = await connect();
    const updateM: IClientes = req.body;

    try {
        await conn.query('UPDATE clientes SET ? WHERE id=? ', [updateM, id]);
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

