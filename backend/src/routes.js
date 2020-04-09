import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import FileController from './app/controllers/FileController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveryDeliveredController from './app/controllers/DeliveryDeliveredController';
import DeliveryPendingController from './app/controllers/DeliveryPendingController';
import DeliveryWithDrawController from './app/controllers/DeliveryWithDrawController';
import DeliveryFinishController from './app/controllers/DeliveryFinishController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

// Deliveries entregues
routes.get('/deliveryman/:id/deliveries', DeliveryDeliveredController.index);

// Deliveries pendentes
routes.get('/deliveryman/:id', DeliveryPendingController.index);

// Retirada
routes.put(
  '/deliveryman/:deliverymanId/delivery/:deliveryId',
  DeliveryWithDrawController.update
);

// Entrega
routes.put(
  '/deliveryman/:deliverymanId/delivery/:deliveryId/finish',
  DeliveryFinishController.update
);

routes.post('/files', upload.single('file'), FileController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

routes.get('/deliveryman', DeliverymanController.index);
routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.destroy);

routes.get('/deliveries', DeliveryController.index);
routes.post('/deliveries', DeliveryController.store);
routes.put('/deliveries/:id', DeliveryController.update);
routes.delete('/deliveries/:id', DeliveryController.destroy);

export default routes;
