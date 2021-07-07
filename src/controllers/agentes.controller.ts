import {Request, Response} from 'express'
import {connect} from '../../database';
import { IAgentes } from "../interface/agentes";



export async function getAll(req:Request, res:Response):Promise <Response> {
   const conn = await  connect();
  const  marcas =await  conn.query('SELECT * FROM TCAgentes')
  return res.json(marcas[0]);
}

export async function create(req:Request, res:Response){
    const newDato:IAgentes = req.body;
    const  conn = await connect();
    await conn.query('INSERT INTO TCAgentes SET ?', [newDato]);
    return res.json({
        message:'true '
    });
}


export async function getxId(req:Request, res:Response){
     const id=req.params.Id;
     const conn = await connect();
   const marcas = await conn.query('SELECT * FROM TCAgentes WHERE id=? ',[id]);
   return res.json(marcas[0]);
}



export async function deletM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
  await conn.query('DELETE FROM TCAgentes WHERE id=? ',[id]);
  return res.json({
    message:'true '
});

}


export async function UpdateM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
    const updateM:IAgentes = req.body;
    await conn.query('UPDATE TCAgentes SET ? WHERE id=? ',[updateM,id]);
    return res.json({
        message:'true '
    });
}



