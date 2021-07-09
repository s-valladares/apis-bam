import { connectTest } from "../../src/database";
import { IAgentes } from "../../src/interface/agentes";

export async function getAll() {
  const conn = await connectTest();
  await conn.query("SELECT * FROM agentes");
  return true;
}

export async function create() {
  const agente: IAgentes = {
    id: 2,
    nombres: "Daniela",
    apellidos: "Peñate",
    nacimiento: new Date("1992-06-11"),
    direccion: "La Asunción",
    telefono: "66998854",
    concesionarioId: 2,
    createdAt: new Date(Date.now())
  };


  const conn = await connectTest();
  await conn.query("INSERT INTO agentes SET ?", [agente]);
  return true;
}

export async function getxId() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM agentes WHERE id=? ", [id]);
  return true;
}

export async function update() {

  const id = 1;
  const conn = await connectTest();
  const update: IAgentes = {
    id: 1,
    nombres: "Francisco update",
    apellidos: "Cruz update",
    nacimiento: new Date("1992-06-11"),
    direccion: "Las cañas, el adelanto update",
    telefono: "66998854",
    concesionarioId: 2,
    createdAt: new Date(Date.now())
  };
  await conn.query("UPDATE agentes SET ? WHERE id=? ", [update, id]);
  return true;
}

export async function deletM() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM agentes WHERE id=? ", [id]);

  return true;
}

export default getAll;
