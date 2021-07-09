export interface IAgentes {
    id?: number;
    nombres: string;
    apellidos: string;
    nacimiento: Date;
    direccion: string;
    telefono: string;
    concesionarioId: number;
    createdAt: Date;
}