/* eslint-disable no-console */
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import SWAGGER_OPTIONS from '../../../swagger.json';
import addFarmerToSystemController from '../../main/erros/web/error.middleware';
import { ENV_APPLICATION_PORT } from '../../util/const/env';
import reoutes from '../route';

export default class Server {
  static run() {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors('*'));
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(SWAGGER_OPTIONS));
    app.use('/api', reoutes);
    app.use(addFarmerToSystemController);
    app.listen(ENV_APPLICATION_PORT, () => {
      console.log(`Server running on port ${ENV_APPLICATION_PORT}`);
    });
  }
}
