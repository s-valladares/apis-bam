import { connectTest } from "../../src/database";
import { IConcesionario } from "../../src/interface/concesionario";

export async function getAll() {
  const conn = await connectTest();
  await conn.query("SELECT * FROM concesionarios");
  return true;
}

export async function create() {
  const concesionario: IConcesionario = {
    id: 2,
    nombre: "Autos Esperanza",
    razon: "Importadora Ramírez SA",
    email: "esperanza@ramirez.com",
    departamento: "Retalhuleu",
    municipio: "Retalhuleu",
    telefono: "55803299",
    createdAt: new Date(Date.now()),
  };

  const concesionario2: IConcesionario = {
    id: 3,
    nombre: "Autos Esperanza",
    razon: "Importadora Ramírez SA",
    email: "esperanza@ramirez.com",
    departamento: "Retalhuleu",
    municipio: "Retalhuleu",
    telefono: "55803299",
    createdAt: new Date(Date.now()),
  };


  const conn = await connectTest();
  try {
    await conn.query("INSERT INTO concesionarios SET ?", [concesionario]);
    await conn.query("INSERT INTO concesionarios SET ?", [concesionario2]);
    return true;
  } catch (error) {
    return false;
  }
}

export async function getById() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM concesionarios WHERE id=? ", [id]);
  return true;
}

export async function update() {

  const id = 2;
  const conn = await connectTest();
  const update: IConcesionario = {
    nombre: "Maldonado's Car -update",
    razon: "Autos Store SA",
    email: "maldonado@autosstore.com",
    departamento: "Escuintla",
    municipio: "Santa Lucía -update",
    telefono: "22458855",
    createdAt: new Date(),
  };
  await conn.query("UPDATE concesionarios SET ? WHERE id=? ", [update, id]);
  return true;
}

export async function deleteConcesionario() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM concesionarios WHERE id=? ", [id]);

  return true;
}

export default getAll;
