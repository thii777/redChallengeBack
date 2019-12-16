import { Router } from 'express';

import multer from 'multer';

import multerConfig from './config/multer';

import PlantController from './app/controllers/PlantController';
import FormController from './app/controllers/FormController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/plants', upload.single('image'), PlantController.store);
routes.get('/plants', PlantController.index);
routes.get('/plants/:id', PlantController.show);

// routes.post('/clients', (req, res) => {
//     const planta = req.body;
//     return res.json(planta);
// });

routes.post('/clients', FormController.store);

export default routes;
