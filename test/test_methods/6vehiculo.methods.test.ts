import {  connectTest } from "../../database";
import { IVehiculos } from "../../src/interface/vehiculos";

export async function getAll() {
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCVehiculos");
  return true;
}

export async function create() {
  const newDato: IVehiculos = {
    id: 1,
    TCMarcaId:2,
    TCConcesionarioId:2,
    Modelo:"2021",
    Precio: 60000,
    Color: "Rojo",
    Tipo: "Camioneta",
    Traccion: "4x4",
    Estado: "Activo",
    Created_At: new Date(),
    
  };
  const newDato2: IVehiculos = {
    id: 2,
    TCMarcaId:2,
    TCConcesionarioId:2,
    Modelo:"2021",
    Precio: 70000,
    Color: "Naranja",
    Tipo: "Sedan",
    Traccion: "2x",
    Estado: "Activo",
    Created_At: new Date(),
  };
  const conn = await connectTest();
  await conn.query("INSERT INTO TCVehiculos SET ?", [newDato]);
  await conn.query("INSERT INTO TCVehiculos SET ?", [newDato2]);
  return true;
}

export async function getxId() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM TCVehiculos WHERE id=? ", [id]);
  return true;
}

export async function UpdateM() {

  const id = 1;
  const conn = await connectTest();
  const updateM: IVehiculos = {
    id: 1,
    TCMarcaId:2,
    TCConcesionarioId:2,
    Modelo:"2022",
    Precio: 70000,
    Color: "Naranja update",
    Tipo: "Sedan",
    Traccion: "2x",
    Estado: "Activo",
    Created_At: new Date(),
  };
  await conn.query("UPDATE TCVehiculos SET ? WHERE id=? ", [updateM, id]);
  return true;
}

export async function deletM() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM TCVehiculos WHERE id=? ", [id]);

  return true;
}

export default getAll;
