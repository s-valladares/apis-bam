import { Request, Response } from 'express'
import { connect } from '../database';
import { IConcesionario } from "../interface/concesionario";



export async function getAll(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    try {
        const concesioanrios = await conn.query('SELECT * FROM concesionarios')
        return res.json(concesioanrios[0]);
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        });
    }


}

export async function create(req: Request, res: Response) {
    const newDato: IConcesionario = req.body;
    const conn = await connect();

    try {
        await conn.query('INSERT INTO concesionarios SET ?', [newDato]);
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

    try {
        const concesionario = await conn.query('SELECT * FROM concesionarios WHERE id=? ', [id]);
        return res.json(concesionario[0]);
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
        await conn.query('DELETE FROM concesionarios WHERE id=? ', [id]);
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
    const updateM: IConcesionario = req.body;

    try {
        await conn.query('UPDATE concesionarios SET ? WHERE id=? ', [updateM, id]);
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





