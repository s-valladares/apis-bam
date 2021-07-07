import {  connectTest } from "../../database";
import { IMunicipios } from "../../src/interface/municipios";

export async function getAll() {
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCMunicipios");
  return true;
}

export async function create() {
  const newDato: IMunicipios = {
    id: 1,
    TCDepartamentoId:2,
    Nombre: "Chiantla prue",
    Estado: "Activo",
    Created_At: new Date(),
  };
  const newDato2: IMunicipios = {
    id: 2,
    TCDepartamentoId:2,
    Nombre: "Chiantla prue",
    Estado: "Activo",
    Created_At: new Date(),
  };
  const conn = await connectTest();
  await conn.query("INSERT INTO TCMunicipios SET ?", [newDato]);
  await conn.query("INSERT INTO TCMunicipios SET ?", [newDato2]);
  return true;
}

export async function getxId() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCMunicipios WHERE id=? ", [id]);
  return true;
}

export async function UpdateM() {

  const id = 1;
  const conn = await connectTest();
  const updateM: IMunicipios = {
    id: 1,
    TCDepartamentoId:2,
    Nombre: "Cliantla Update",
    Estado: "Activo",
    Created_At: new Date(),
  };
  await conn.query("UPDATE TCMunicipios SET ? WHERE id=? ", [updateM, id]);
  return true;
}

export async function deletM() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM TCMunicipios WHERE id=? ", [id]);

  return true;
}

export default getAll;
