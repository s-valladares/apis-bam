import {  connectTest } from "../../database";
import { IDepartamentos } from "../../src/interface/departamentos";

export async function getAll() {
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCDepartamentos");

  return true;
}

export async function create() {
  const newDato: IDepartamentos = {
    id: 1,
    Nombre: "Huehuetenango Dep",
    Estado: "Activo",
    Created_At: new Date(),
  };
  const newDato2: IDepartamentos = {
    id: 2,
    Nombre: "Quetzaltenango Dep",
    Estado: "Activo",
    Created_At: new Date(),
  };
  const conn = await connectTest();
  await conn.query("INSERT INTO TCDepartamentos SET ?", [newDato]);
  await conn.query("INSERT INTO TCDepartamentos SET ?", [newDato2]);
  return true;
}

export async function getxId() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCDepartamentos WHERE id=? ", [id]);
  return true;
}

export async function UpdateM() {
  const id = 1;
  const conn = await connectTest();
  const updateM: IDepartamentos = {
    id: 1,
    Nombre: "Huehuetenango update",
    Estado: "Activo",
    Created_At: new Date(),
  };
  await conn.query("UPDATE TCDepartamentos SET ? WHERE id=? ", [updateM, id]);
  return true;
}

export async function deletM() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM TCDepartamentos WHERE id=? ", [id]);

  return true;
}

export default getAll;
