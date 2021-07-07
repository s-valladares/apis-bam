import {Request, Response} from 'express'
import {connect} from '../../database';
import { IMunicipios } from "../interface/municipios";



export async function getAll(req:Request, res:Response):Promise <Response> {
   const conn = await  connect();
  const  marcas =await  conn.query('SELECT * FROM TCMunicipios')
  return res.json(marcas[0]);
}

export async function create(req:Request, res:Response){
    const newDato:IMunicipios = req.body;
    const  conn = await connect();
    await conn.query('INSERT INTO TCMunicipios SET ?', [newDato]);
    return res.json({
        message:'true '
    });
}


export async function getxId(req:Request, res:Response){
     const id=req.params.Id;
     const conn = await connect();
   const marcas = await conn.query('SELECT mu.*,dep.Nombre FROM TCMunicipios mu inner join TCDepartamentos dep on dep.id=mu.TCDepartamentoId WHERE mu.id=? ',[id]);
   return res.json(marcas[0]);
}



export async function deletM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
  await conn.query('DELETE FROM TCMunicipios WHERE id=? ',[id]);
  return res.json({
    message:'true '
});

}


export async function UpdateM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
    const updateM:IMunicipios = req.body;
    await conn.query('UPDATE TCMunicipios SET ? WHERE id=? ',[updateM,id]);
    return res.json({
        message:'true '
    });
}






