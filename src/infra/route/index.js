import { Router } from 'express';
import authenticationMiddeware from '../../main/authentication/web/authentication.middleware';
import signController from '../../main/authentication/web/sign.controller';
import addFarmerToSystemController from '../../main/farmer/web/add-farmer-to-system.controller';
import showFarmerInformationLoggedController from '../../main/farmer/web/show-farmer-information-logged.controller';
import addFarmToSystemController from '../../main/farm/web/add-farm-to-system.use-case';

const route = Router();

route.get('/', (_, res) => res.json({ message: 'Hello World' }));
route.post('/auth/sign', signController);

route.post('/farmer', addFarmerToSystemController);
route.get('/farmer', authenticationMiddeware, showFarmerInformationLoggedController);

route.post('/farm', authenticationMiddeware, addFarmToSystemController);

export default route;
