import {Request, Response} from 'express'
import {connect} from '../../database';
import { IClientes } from "../interface/clientes";



export async function getAll(req:Request, res:Response):Promise <Response> {
   const conn = await  connect();
  const  marcas =await  conn.query('SELECT * FROM TCClientes')
  return res.json(marcas[0]);
}

export async function create(req:Request, res:Response){
    const newDato:IClientes = req.body;
    const  conn = await connect();
    await conn.query('INSERT INTO TCClientes SET ?', [newDato]);
    return res.json({
        message:'true '
    });
}


export async function getxId(req:Request, res:Response){
     const id=req.params.Id;
     const conn = await connect();
   const marcas = await conn.query('SELECT cli.*,mu.Nombre FROM TCClientes cli inner join TCMunicipios mu on mu.id=cli.TCMunicipioId WHERE cli.id=? ',[id]);
   return res.json(marcas[0]);
}



export async function deletM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
  await conn.query('DELETE FROM TCClientes WHERE id=? ',[id]);
  return res.json({
    message:'true '
});

}


export async function UpdateM(req:Request, res:Response){
    const id=req.params.Id;
    const conn = await connect();
    const updateM:IClientes = req.body;
    await conn.query('UPDATE TCClientes SET ? WHERE id=? ',[updateM,id]);
    return res.json({
        message:'true '
    });
}

