export interface IVehiculos {
    id: number;
    modelo: string;
    marca: string;
    costo: number;
    precio: number;
    color: string;
    tipo: string;
    traccion: string;
    concesionarioId: number;
    createdAt: Date;
}