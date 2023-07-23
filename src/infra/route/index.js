import { Router } from 'express';
import addFarmerToSystemController from '../../main/farmer/web/add-farmer-to-system.controller';

const route = Router();

// route.get('/', (_, res) => res.json({ message: 'Hello World' }));
route.post('/farmer', addFarmerToSystemController);

export default route;
