import {  connectTest } from "../../database";
import { IAgentes } from "../../src/interface/agentes";

export async function getAll() {
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCAgentes");
  return true;
}

export async function create() {
  const newDato: IAgentes = {
    id: 1,
    TCConcesionarioId:2,
    Telefono:35840525,
    Nombres: "Agente 1",
    Apellidos: "Perez",
    Nacimiento: new Date("1994-5-5"),
    Estado: "Activo",
    Created_At: new Date(),
    
  };
  const newDato2: IAgentes = {
    id: 2,
    TCConcesionarioId:2,
    Telefono:35840525,
    Nombres: "Agente 2",
    Apellidos: "Mendez",
    Nacimiento: new Date("1994-5-5"),
    Estado: "Activo",
    Created_At: new Date(),
  };
  const conn = await connectTest();
  await conn.query("INSERT INTO TCAgentes SET ?", [newDato]);
  await conn.query("INSERT INTO TCAgentes SET ?", [newDato2]);
  return true;
}

export async function getxId() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCAgentes WHERE id=? ", [id]);
  return true;
}

export async function UpdateM() {

  const id = 1;
  const conn = await connectTest();
  const updateM: IAgentes = {
    id: 1,
    TCConcesionarioId:2,
    Telefono:35840525,
    Nombres: "Agente 2 update",
    Apellidos: "Mendez update",
    Nacimiento: new Date("1994-5-5"),
    Estado: "Activo",
    Created_At: new Date(),
  };
  await conn.query("UPDATE TCAgentes SET ? WHERE id=? ", [updateM, id]);
  return true;
}

export async function deletM() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM TCAgentes WHERE id=? ", [id]);

  return true;
}

export default getAll;
