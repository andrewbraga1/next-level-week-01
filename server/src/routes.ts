import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import multer from 'multer';
import multerconfig from './config/multer';

import { celebrate, Joi } from 'celebrate';



const routes = express.Router();
const upload =  multer(multerconfig);



const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);


routes.get('/points', pointsController.index);
routes.post(
    '/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            uf: Joi.string().required(),
            city: Joi.string().required().max(2),
            items: Joi.string().required()/* .regex()*/,
        })
    },{
        abortEarly: false
    }),
    pointsController.create);
routes.get('/points/:id', pointsController.show);
 
export default routes;