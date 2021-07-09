
import { Router } from 'express'
import ConcesionarioRoute from './concesionarios.routes';
import ClientesRoute from './clientes.routes';
import VehiculosRoute from './vehiculos.routes';
import AgentesRoute from './agentes.routes';
import CotizacionesRoute from './cotizaciones.routes';
import DetalleCotizaciones from './detallecotizaciones.routes';
const router = Router();


router.use('/concesionario', ConcesionarioRoute)
router.use('/clientes', ClientesRoute)
router.use('/vehiculos', VehiculosRoute)
router.use('/Agentes', AgentesRoute)
router.use('/cotizaciones', CotizacionesRoute)
router.use('/detalles', DetalleCotizaciones)
export default router;