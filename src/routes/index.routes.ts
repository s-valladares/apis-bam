
import { Router} from 'express'
import MarcasRoute from './marcas.routes';
import DepartamentosRoute from './departamentos.routes';
import ConcesionarioRoute from './concesionarios.routes';
import ClientesRoute from './clientes.routes';
import MunicipiosRoute from './municipios.routes';
import VehiculosRoute from './vehiculos.routes';
import AgentesRoute from './agentes.routes';
import CotizacionesRoute from './cotizaciones.routes';
import DetalleCotizaciones from './detallecotizaciones.routes';
const router = Router();


router.use('/marcas',MarcasRoute)
router.use('/departamentos',DepartamentosRoute)
router.use('/concesionario',ConcesionarioRoute)
router.use('/clientes',ClientesRoute)
router.use('/municipios',MunicipiosRoute)
router.use('/vehiculos',VehiculosRoute)
router.use('/Agentes',AgentesRoute)
router.use('/cotizaciones',CotizacionesRoute)
router.use('/detalles',DetalleCotizaciones)
export default router;