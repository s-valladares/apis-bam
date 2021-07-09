import { Request, Response } from 'express'
import { connect, Querys } from '../database';
import { IConcesionario } from "../interface/concesionario";
import { IVehiculos } from '../interface/vehiculos';



export async function getAll(req: Request, res: Response): Promise<Response> {
    const conn = await connect();

    try {
        const vehiculos = await conn.query(Querys.VEHICULOS_SELECT_ALL)
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
        await conn.query(Querys.VEHICULOS_INSERT, [newDato]);
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

export async function search(req: Request, res: Response) {
    //const newDato:any = req.body;
    const conn = await connect();
    const datos = await conn.query(Querys.VEHICULOS_SEARCH, ['%' + req.params.Dato + '%', '%' + req.params.Dato + '%', '%' + req.params.Dato + '%', '%' + req.params.Dato + '%']);
    return res.json(datos[0]);
}


export async function getxId(req: Request, res: Response) {
    const id = req.params.Id;
    const conn = await connect();


    try {
        const vehiculo = await conn.query(Querys.VEHICULOS_GET_ID, [id]);
        return res.json(vehiculo[0]);
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
        await conn.query('DELETE FROM vehiculos WHERE id=? ', [id]);
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






