import {  connectTest } from "../../database";
import { IClientes } from "../../src/interface/clientes";

export async function getAll() {
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCClientes");
  return true;
}

export async function create() {
  const newDato: IClientes = {
    id: 1,
    TCMunicipioId:2,
    Telefono:35840525,
    Nombres: "Juan",
    Apellidos: "Perez",
    Nacimiento: new Date("1994-5-5"),
    EstadoCivil: "Casado",
    Escolaridad: "Universidad",
    Estado: "Activo",
    Created_At: new Date(),
    
  };
  const newDato2: IClientes = {
    id: 2,
    TCMunicipioId:2,
    Telefono:35840525,
    Nombres: "Pedro",
    Apellidos: "Gomez",
    Nacimiento: new Date("1994-5-5"),
    EstadoCivil: "Casado",
    Escolaridad: "Universidad",
    Estado: "Activo",
    Created_At: new Date(),
  };
  const conn = await connectTest();
  await conn.query("INSERT INTO TCClientes SET ?", [newDato]);
  await conn.query("INSERT INTO TCClientes SET ?", [newDato2]);
  return true;
}

export async function getxId() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCClientes WHERE id=? ", [id]);
  return true;
}

export async function UpdateM() {

  const id = 1;
  const conn = await connectTest();
  const updateM: IClientes = {
    id: 1,
    TCMunicipioId:2,
    Telefono:12345678,
    Nombres: "Pedro update",
    Apellidos: "Gomez update",
    Nacimiento: new Date("1994-5-5"),
    EstadoCivil: "Casado",
    Escolaridad: "Universidad",
    Estado: "Activo",
    Created_At: new Date(),
  };
  await conn.query("UPDATE TCClientes SET ? WHERE id=? ", [updateM, id]);
  return true;
}

export async function deletM() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM TCClientes WHERE id=? ", [id]);

  return true;
}

export default getAll;
