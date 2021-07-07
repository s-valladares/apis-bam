import { createPool } from 'mysql2/promise';

export async function connect() {

    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'db_bam',
        connectionLimit: 10
    });
    return connection;
}



export async function connectTest() {

    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'db_bam_test',
        connectionLimit: 10
    });
    return connection;
}