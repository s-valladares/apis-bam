export interface IClientes {
    id?: number;
    nombres: string;
    apellidos: string;
    direccion: string;
    telefono: string;
    email: string;
    nivelAcademico: string;
    concesionarioId: number;
    profesion: string;
    createdAt: Date;
}