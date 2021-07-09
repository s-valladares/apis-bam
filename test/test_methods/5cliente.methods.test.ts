import { connectTest } from "../../src/database";
import { IClientes } from "../../src/interface/clientes";

export async function getAll() {
  const conn = await connectTest();
  await conn.query("SELECT * FROM clientes");
  return true;
}

export async function create() {
  const cliente: IClientes = {
    id: 2,
    nombres: "Enmanuel",
    apellidos: "Argueta",
    direccion: "Los Valles, El arenal",
    telefono: "54141414",
    email: "enmanuel@gmail.com",
    nivelAcademico: "Cierre de pénsum Ingeniería",
    concesionarioId: 2,
    profesion: "Catedrático Universidad",
    createdAt: new Date(Date.now())
  };

  const conn = await connectTest();
  await conn.query("INSERT INTO clientes SET ?", [cliente]);
  return true;
}

export async function getxId() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM clientes WHERE id=? ", [id]);
  return true;
}

export async function update() {

  const id = 2;
  const conn = await connectTest();
  const update: IClientes = {
    id: 2,
    nombres: "Carlos update",
    apellidos: "Aguilar P",
    direccion: "La Asunción update",
    telefono: "66998854",
    email: "carlos@gmail.com",
    nivelAcademico: "Cierre de pénsum Ingeniería update",
    concesionarioId: 2,
    profesion: "Catedrático Universidad update",
    createdAt: new Date(Date.now())
  };
  await conn.query("UPDATE clientes SET ? WHERE id=? ", [update, id]);
  return true;
}

export async function deletClient() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM clientes WHERE id=? ", [id]);

  return true;
}

export default getAll;
