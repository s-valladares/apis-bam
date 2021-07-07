import {  connectTest } from "../../database";
import { IDetalleCotizaciones } from "../../src/interface/detallecotizaciones";

export async function getxIdDetalle() {
    const id = 2;
    const conn = await connectTest();
    await conn.query('SELECT dt.id as iddeta ,dt.*, ve.* from TCDetalleCotizaciones dt inner join TCCotizaciones co on co.id=dt.TCCotizacionId inner join TCVehiculos ve on ve.id = dt.TCVehiculoId WHERE co.id=? ',[id]);
    return true;
}

export async function getAll() {
    const conn = await connectTest();
    await conn.query("SELECT * FROM TCDetalleCotizaciones");
    return true;
  }

export async function create() {
  const newDato: IDetalleCotizaciones = {
    id: 1,
    TCVehiculoId:2,
    TCCotizacionId:2,
    Descripcion:"Decripcion",
    Estado: "Activo",
    Created_At: new Date(),
    
  };
  const newDato2: IDetalleCotizaciones = {
    id: 2,
    TCVehiculoId:2,
    TCCotizacionId:2,
    Descripcion:"Descripcion",
    Estado: "Activo",
    Created_At: new Date(),
  };
  const conn = await connectTest();
  await conn.query("INSERT INTO TCDetalleCotizaciones SET ?", [newDato]);
 // await conn.query("INSERT INTO TCDetalleCotizaciones SET ?", [newDato2]);
  return true;
}

export async function getxId() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCDetalleCotizaciones WHERE id=? ", [id]);
  return true;
}

export async function UpdateM() {

  const id = 1;
  const conn = await connectTest();
  const updateM: IDetalleCotizaciones = {
    id: 1,
    TCVehiculoId:2,
    TCCotizacionId:2,
    Descripcion:"descripcion update",
    Estado: "Activo",
    Created_At: new Date(),
  };
  await conn.query("UPDATE TCDetalleCotizaciones SET ? WHERE id=? ", [updateM, id]);
  return true;
}

export async function deletM() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM TCDetalleCotizaciones WHERE id=? ", [id]);

  return true;
}

export default getAll;
