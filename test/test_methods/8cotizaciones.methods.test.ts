import {  connectTest } from "../../database";
import { ICotizaciones } from "../../src/interface/cotizaciones";


export async function getAll() {
  const newDato: any = {
    FechaInicio: "",
    FechaFin:"",
  };

  const conn = await connectTest();
  await conn.query('select  co.*,ag.Nombres as Agente, cli.Nombres as Cliente from tccotizaciones co inner join tcagentes ag on ag.id=co.tcAgenteid inner join tcclientes cli on cli.id = co.tcclienteid where date(co.created_at) between date(ifnull(?,co.created_at))and date(ifnull(?,co.created_at) );', [newDato.FechaInicio,newDato.FechaFin]);
  return true;
}
// export async function getAll() {
//   const conn = await connectTest();
//   await conn.query('select  co.*,ag.Nombres as Agente, cli.Nombres as Cliente from tccotizaciones co inner join tcagentes ag on ag.id=co.tcAgenteid inner join tcclientes cli on cli.id = co.tcclienteid where date(co.created_at) between date(ifnull(?,co.created_at))and date(ifnull(?,co.created_at) );', [req.body.FechaInicio,req.body.FechaFin]);
//   return true;
// }

export async function create() {
  const newDato: ICotizaciones = {
    id: 1,
    TCAgenteId:2,
    TCClienteId:2,
    Vencimiento:new Date("2021-9-9"),
    Estado: "Activo",
    Created_At: new Date(),
    
  };
  const newDato2: ICotizaciones = {
    id: 2,
    TCAgenteId:2,
    TCClienteId:2,
    Vencimiento: new Date("2021-10-10"),
    Estado: "Activo",
    Created_At: new Date(),
    
  };
  const conn = await connectTest();
  await conn.query("INSERT INTO TCCotizaciones SET ?", [newDato]);
  await conn.query("INSERT INTO TCCotizaciones SET ?", [newDato2]);
  return true;
}

export async function getxId() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCCotizaciones WHERE id=? ", [id]);
  return true;
}

export async function UpdateM() {

  const id = 1;
  const conn = await connectTest();
  const updateM: ICotizaciones = {
    id: 1,
    TCAgenteId:2,
    TCClienteId:2,
    Vencimiento: new Date("2021-11-11"),
    Estado: "Activo",
    Created_At: new Date(),
  };
  await conn.query("UPDATE TCCotizaciones SET ? WHERE id=? ", [updateM, id]);
  return true;
}

export async function deletM() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM TCCotizaciones WHERE id=? ", [id]);

  return true;
}

export default getAll;
