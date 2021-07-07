import {Request, Response} from 'express'
import {connect} from '../../database';
import { IConcesionario } from "../interface/concesionario";



export async function getAll(req:Request, res:Response):Promise <Response> {
   const conn = await  connect();
  const  marcas =await  conn.query('SELECT * FROM TCConcesionarios')
  return res.json(marcas[0]);
}

export async function create(req:Request, res:Response){
    const newDato:IConcesionario = req.body;
    const  conn = await connect();
    await conn.query('INSERT INTO TCConcesionarios SET ?', [newDato]);
    return res.json({
        message:'true '
    });
}


export async function getxId(req:Request, res:Response){
     const id=req.params.Id;
     const conn = await connect();
   const marcas = await conn.query('SELECT * FROM TCConcesionarios WHERE id=? ',[id]);
   return res.json(marcas[0]);
}



export async function deletM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
  await conn.query('DELETE FROM TCConcesionarios WHERE id=? ',[id]);
  return res.json({
    message:'true '
});

}


export async function UpdateM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
    const updateM:IConcesionario = req.body;
    await conn.query('UPDATE TCConcesionarios SET ? WHERE id=? ',[updateM,id]);
    return res.json({
        message:'true '
    });
}





