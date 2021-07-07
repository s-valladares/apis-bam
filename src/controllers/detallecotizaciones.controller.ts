import {Request, Response} from 'express'
import {connect} from '../../database';
import { IDetalleCotizaciones } from "../interface/detallecotizaciones";



export async function getAll(req:Request, res:Response):Promise <Response> {
   const conn = await  connect();
  const  marcas =await  conn.query('SELECT * FROM TCDetalleCotizaciones')
  return res.json(marcas[0]);
}

export async function create(req:Request, res:Response){
    const newDato:IDetalleCotizaciones = req.body;
    const  conn = await connect();
    await conn.query('INSERT INTO TCDetalleCotizaciones SET ?', [newDato]);
    return res.json({
        message:'true '
    });
}


export async function getxId(req:Request, res:Response){
     const id=req.params.Id;
     const conn = await connect();
   const marcas = await conn.query('SELECT * FROM TCDetalleCotizaciones  WHERE id=? ',[id]);
   return res.json(marcas[0]);
}

export async function getxIdDetalle(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
    const marcas = await conn.query('SELECT dt.id as iddeta ,dt.*, ve.* from TCDetalleCotizaciones dt inner join TCCotizaciones co on co.id=dt.TCCotizacionId inner join TCVehiculos ve on ve.id = dt.TCVehiculoId WHERE co.id=? ',[id]);
    return res.json(marcas[0]);

}



export async function deletM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
  await conn.query('DELETE FROM TCDetalleCotizaciones WHERE id=? ',[id]);
  return res.json({
    message:'true '
});

}


export async function UpdateM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
    const updateM:IDetalleCotizaciones = req.body;
    await conn.query('UPDATE TCDetalleCotizaciones SET ? WHERE id=? ',[updateM,id]);
    return res.json({
        message:'true '
    });
}



