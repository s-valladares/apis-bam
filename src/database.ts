import { createPool } from 'mysql2/promise';

export async function connect() {

    const connection = await createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATA_BASE,
        connectionLimit: 30
    });
    return connection;
}


export async function connectTest() {

    const connection = await createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATA_BASE,
        connectionLimit: 30
    });
    return connection;
}

export abstract class Querys {
    static readonly VEHICULOS_SELECT_ALL: string = 'SELECT * FROM vehiculos'
    static readonly VEHICULOS_INSERT: string = 'INSERT INTO vehiculos SET ?'
    static readonly VEHICULOS_SEARCH: string = 'SELECT * FROM vehiculos where modelo like ? or marca like ? or linea like ? or tipo like ?'
    static readonly VEHICULOS_GET_ID: string = 'SELECT v.*, co.nombre FROM vehiculos v inner join concesionarios co on v.concesionarioId = co.id WHERE v.id=? '
}
