import {  connectTest } from "../../database";
import { IConcesionario } from "../../src/interface/concesionario";

export async function getAll() {
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCConcesionarios");
  return true;
}

export async function create() {
  const newDato: IConcesionario = {
    id: 1,
    TCMunicipioId:2,
    Nombre: "Autos Gabriel",
    Razon: "Venta de Autos",
    Estado: "Activo",
    Created_At: new Date(),
  };
  const newDato2: IConcesionario = {
    id: 2,
    TCMunicipioId:2,
    Nombre: "Autos Hernandez",
    Razon: "Venta de Autos",
    Estado: "Activo",
    Created_At: new Date(),
  };
  const conn = await connectTest();
  await conn.query("INSERT INTO TCConcesionarios SET ?", [newDato]);
  await conn.query("INSERT INTO TCConcesionarios SET ?", [newDato2]);
  return true;
}

export async function getxId() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCConcesionarios WHERE id=? ", [id]);
  return true;
}

export async function UpdateM() {

  const id = 1;
  const conn = await connectTest();
  const updateM: IConcesionario = {
    id: 1,
    TCMunicipioId:2,
    Nombre: "Autos Gabriel update",
    Razon: "Venta de Autos update",
    Estado: "Activo",
    Created_At: new Date(),
  };
  await conn.query("UPDATE TCConcesionarios SET ? WHERE id=? ", [updateM, id]);
  return true;
}

export async function deletM() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM TCConcesionarios WHERE id=? ", [id]);

  return true;
}

export default getAll;
