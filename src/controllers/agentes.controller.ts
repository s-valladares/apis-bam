import { Request, Response } from 'express'
import { connect } from '../database';
import { IAgentes } from "../interface/agentes";



export async function getAll(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const marcas = await conn.query('SELECT * FROM agentes')
    conn.end();
    return res.json(marcas[0]);
}

export async function create(req: Request, res: Response) {
    const newDato: IAgentes = req.body;
    const conn = await connect();

    try {
        await conn.query('INSERT INTO agentes SET ?', [newDato]);
        conn.end();
        return res.json({
            success: true,
            message: 'Insertado correctamente'
        });
    } catch (error) {
        conn.end();
        return res.json({
            success: false,
            message: 'Ocurrió un error ' + error.message
        });
    }
}


export async function getxId(req: Request, res: Response) {
    const id = req.params.Id;
    const conn = await connect();
    try {
        const marcas = await conn.query('SELECT a.*, con.nombre as tienda FROM agentes a inner join concesionarios con on con.id = a.concesionarioId WHERE a.id=? ', [id]);
        conn.end();
        return res.json(marcas[0]);
    } catch (error) {
        conn.end();
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
        await conn.query('DELETE FROM agentes WHERE id=? ', [id]);
        conn.end();
        return res.json({
            success: true,
            message: 'Eliminado correctamente '
        });
    } catch (error) {
        conn.end();
        return res.json({
            success: false,
            message: 'Error: ' + error.message
        });
    }
}

export async function UpdateM(req: Request, res: Response) {
    const id = req.params.Id;
    const conn = await connect();
    const updateM: IAgentes = req.body;
    try {
        await conn.query('UPDATE agentes SET ? WHERE id=? ', [updateM, id]);
        conn.end();
        return res.json({
            success: true,
            message: 'Actualizado correctamente'
        });
    } catch (error) {
        conn.end();
        return res.json({
            success: false,
            message: 'Ocurrió un error ' + error.message
        });
    }
}



