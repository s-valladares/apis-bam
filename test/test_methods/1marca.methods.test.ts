import {  connectTest } from "../../database";
import { IMarcas } from "../../src/interface/marcas";

export async function getAll() {
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCMarcas");

  return true;
}

export async function create() {
  const newDato: IMarcas = {
    id: 1,
    Nombre: "marca prueba",
    Estado: "Activo",
    Created_At: new Date(),
  };
  const newDato2: IMarcas = {
    id: 2,
    Nombre: "Toyota",
    Estado: "Activo",
    Created_At: new Date(),
  };
  const conn = await connectTest();
  await conn.query("INSERT INTO TCMarcas SET ?", [newDato]);
  await conn.query("INSERT INTO TCMarcas SET ?", [newDato2]);
  return true;
}

export async function getxId() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCMarcas WHERE id=? ", [id]);
  return true;
}

export async function UpdateM() {
  const id = 1;
  const conn = await connectTest();
  const updateM: IMarcas = {
    id: 1,
    Nombre: "marca prueba updated",
    Estado: "Activo",
    Created_At: new Date(),
  };
  await conn.query("UPDATE TCMarcas SET ? WHERE id=? ", [updateM, id]);
  return true;
}

export async function deletM() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM TCMarcas WHERE id=? ", [id]);

  return true;
}

export default getAll;
