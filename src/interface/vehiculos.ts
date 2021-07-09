export interface IVehiculos {
    id?: number;
    modelo: string;
    marca: string;
    descripcion: string;
    costo: number;
    cantidad: number;
    precio: number;
    color: string;
    tipo: string;
    formaPago: string
    numeroPagos: number;
    cc: number;
    v: string;
    concesionarioId: number;
    createdAt: Date;
}