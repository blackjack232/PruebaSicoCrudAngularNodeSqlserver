import {Router} from 'express'

 import { getAllEstudiante,getAllEstudianteById,deleteEstudiante,createEstudiante,updateEstudiante} from '../controllers/estudiante.controller';


const router = Router();

router.get('/estudiante',getAllEstudiante);
router.get('/estudiante/:id',getAllEstudianteById);
router.delete('/estudiante/:id',deleteEstudiante);
router.post('/estudiante',createEstudiante);
router.put('/estudiante/:id',updateEstudiante);
export default router