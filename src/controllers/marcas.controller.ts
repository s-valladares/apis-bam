import {Request, Response} from 'express'
import {connect} from '../../database';
import { IMarcas } from "../interface/marcas";



export async function getAll(req:Request, res:Response):Promise <Response> {
   const conn = await  connect();
  const  marcas =await  conn.query('SELECT * FROM TCMarcas')
  return res.json(marcas[0]);
}

export async function create(req:Request, res:Response){
    const newDato:IMarcas = req.body;
    const  conn = await connect();
    await conn.query('INSERT INTO TCMarcas SET ?', [newDato]);
    return res.json({
        message:'true '
    });
}


export async function getxId(req:Request, res:Response){
     const id=req.params.Id;
     const conn = await connect();
   const marcas = await conn.query('SELECT * FROM TCMarcas WHERE id=? ',[id]);
   return res.json(marcas[0]);
}



export async function deletM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
  await conn.query('DELETE FROM TCMarcas WHERE id=? ',[id]);
  return res.json({
    message:'true '
});

}


export async function UpdateM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
    const updateM:IMarcas = req.body;
    await conn.query('UPDATE TCMarcas SET ? WHERE id=? ',[updateM,id]);
    return res.json({
        message:'true '
    });
}










