import { connectTest } from "../../src/database";
import { ICotizaciones } from "../../src/interface/cotizaciones";


export async function getAll() {
  const newDato: any = {
    FechaInicio: "",
    FechaFin: "",
  };

  const conn = await connectTest();
  await conn.query('select * from cotizaciones');
  return true;
}
// export async function getAll() {
//   const conn = await connectTest();
//   await conn.query('select  co.*,ag.Nombres as Agente, cli.Nombres as Cliente from tccotizaciones co inner join tcagentes ag on ag.id=co.tcAgenteid inner join tcclientes cli on cli.id = co.tcclienteid where date(co.created_at) between date(ifnull(?,co.created_at))and date(ifnull(?,co.created_at) );', [req.body.FechaInicio,req.body.FechaFin]);
//   return true;
// }

export async function create() {
  const cot: ICotizaciones = {
    id: 2,
    agente_id: 2,
    cliente_id: 2,
    vehiculo_id: 2,
    concesionario_id: 2,
    cantidad: 2,
    total: 100000,
    createdAt: new Date(Date.now()),

  };

  const conn = await connectTest();
  await conn.query("INSERT INTO cotizaciones SET ?", [cot]);
  return true;
}

export async function getxId() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("SELECT * FROM cotizaciones WHERE id=? ", [id]);
  return true;
}


export async function deletM() {
  const id = 1;
  const conn = await connectTest();
  await conn.query("DELETE FROM cotizaciones WHERE id=? ", [id]);

  return true;
}

export default getAll;
