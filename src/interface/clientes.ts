export interface IClientes {
    id: number;
    nombres: string;
    apellidos: string;
    nacimiento: Date;
    direccion: string;
    telefono: number;
    email: string;
    estadoCivl: string;
    nivelAcademico: string;
    concesionarioId: number;
    profesion: string;
    createdAt: Date;
}