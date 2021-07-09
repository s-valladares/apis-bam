import { connectTest } from "../../src/database";
import { IVehiculos } from "../../src/interface/vehiculos";

export async function getAll() {
  const conn = await connectTest();
  await conn.query("SELECT * FROM vehiculos");
  return true;
}

export async function create() {
  const vehiculo: IVehiculos = {
    id: 2,
    modelo: '2005',
    marca: 'Toyota',
    descripcion: 'Todo terreno',
    costo: 60000,
    cantidad: 5,
    precio: 85000,
    tipo: 'Pickup',
    color: "Rojo",
    formaPago: 'Contado',
    numeroPagos: 0,
    cc: 2500,
    v: 'V6',
    concesionarioId: 2,
    createdAt: new Date(Date.now()),
  };


  const conn = await connectTest();
  await conn.query("INSERT INTO vehiculos SET ?", [vehiculo]);
  return true;
}

export async function getxId() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM vehiculos WHERE id=? ", [id]);
  return true;
}

export async function update() {

  const id = 1;
  const conn = await connectTest();
  const update: IVehiculos = {
    id: 2,
    modelo: '2010',
    marca: 'Honda update',
    descripcion: 'Sencilla update',
    costo: 40000,
    cantidad: 10,
    precio: 65000,
    tipo: 'Camioneta update',
    color: "Gris",
    formaPago: 'Crédito update',
    numeroPagos: 12,
    cc: 3000,
    v: 'V4',
    concesionarioId: 2,
    createdAt: new Date(Date.now()),
  };
  await conn.query("UPDATE vehiculos SET ? WHERE id=? ", [update, id]);
  return true;
}

export async function deletM() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM vehiculos WHERE id=? ", [id]);

  return true;
}

export default getAll;
