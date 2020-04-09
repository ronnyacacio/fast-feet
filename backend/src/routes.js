import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import FileController from './app/controllers/FileController';
import DeliveryController from './app/controllers/DeliveryController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/deliveryman', DeliverymanController.index);
routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.destroy);

routes.get('/deliveries', DeliveryController.index);
routes.post('/deliveries', DeliveryController.store);
routes.put('/deliveries/:id', DeliveryController.update);
routes.delete('/deliveries/:id', DeliveryController.destroy);

export default routes;
