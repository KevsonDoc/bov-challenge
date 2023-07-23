import { Router } from 'express';
import addFarmerToSystemController from '../../main/farmer/web/add-farmer-to-system.controller';
import signController from '../../main/authentication/web/sign.controller';
import authenticationMiddeware from '../../main/authentication/web/authentication.middleware';

const route = Router();

route.get('/', (_, res) => res.json({ message: 'Hello World' }));
route.post('/auth/sign', signController);

route.post('/farmer', addFarmerToSystemController);
route.get('/farmer', authenticationMiddeware, (req, res) => res.json({ message: req.user.id }));

export default route;
