export interface ICotizaciones {
    id?: number;
    agente_id: number;
    cliente_id: number;
    total: number;
    cantidad: number;
    vehiculo_id: number;
    concesionario_id: number;
    createdAt: Date;
}