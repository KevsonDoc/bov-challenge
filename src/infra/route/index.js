import { Router } from 'express';

const route = Router();

route.get('/', (_, res) => res.json({ message: 'Hello World' }));

export default route;
