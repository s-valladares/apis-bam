import { Request, Response } from 'express'
import { connect } from '../../database';
import { ICotizaciones } from "../interface/cotizaciones";



export async function getAll(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const cotizacion = await conn.query('SELECT co.*, cli.nombres, cli.apellidos, v.marca, v.linea, v.modelo, v.precio, conce.nombre as concesionario FROM cotizaciones co inner join clientes cli on cli.id = co.cliente_id inner join vehiculos v on co.vehiculo_id = v.id inner join concesionarios conce on conce.id = co.concesionario_id')
    return res.json(cotizacion[0]);
}

export async function create(req: Request, res: Response) {
    const newDato: ICotizaciones = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO cotizaciones SET ?', [newDato]);
    return res.json({
        message: 'true '
    });
}


export async function CotizacionesRp(req: Request, res: Response) {
    //const newDato:any = req.body;
    const conn = await connect();
    const datos = await conn.query('select  co.*,ag.Nombres as Agente, cli.Nombres as Cliente from TCCotizaciones co inner join TCAgentes ag on ag.id=co.tcAgenteid inner join TCClientes cli on cli.id = co.tcclienteid where date(co.created_at) between date(ifnull(?,co.created_at))and date(ifnull(?,co.created_at) );', [req.body.FechaInicio, req.body.FechaFin]);
    return res.json(datos[0]);
}


export async function getxId(req: Request, res: Response) {
    const id = req.params.Id;
    const conn = await connect();
    const marcas = await conn.query('SELECT co.*, cli.Nombres, a.Nombres  FROM TCCotizaciones co inner join TCClientes cli on cli.id= co.TCClienteId inner join TCAgentes a on a.id=co.TCAgenteId  WHERE co.id=? ', [id]);
    return res.json(marcas[0]);
}



export async function deletM(req: Request, res: Response) {
    const id = req.params.Id;
    const conn = await connect();
    await conn.query('DELETE FROM TCCotizaciones WHERE id=? ', [id]);
    return res.json({
        message: 'true '
    });

}


export async function UpdateM(req: Request, res: Response) {
    const id = req.params.Id;
    const conn = await connect();
    const updateM: ICotizaciones = req.body;
    await conn.query('UPDATE TCCotizaciones SET ? WHERE id=? ', [updateM, id]);
    return res.json({
        message: 'true '
    });
}



