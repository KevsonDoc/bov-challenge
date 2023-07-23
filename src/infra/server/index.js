/* eslint-disable no-console */
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import SWAGGER_OPTIONS from '../../../swagger.json';
import NotFound from '../../main/erros/core/not-found.error';
import ServerError from '../../main/erros/core/server.error';
import UnauthorizedError from '../../main/erros/core/unauthorized.error';
import UnprocessableEntity from '../../main/erros/core/unprocessable-entity.error';
import { ENV_PORT } from '../../util/const/env';
import reoutes from '../route';

export default class Server {
  static run() {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors('*'));
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(SWAGGER_OPTIONS));
    app.use('/api', reoutes);
    app.use((error, _, response, next) => {
      if (!error) {
        return next();
      }

      if (error instanceof NotFound) {
        console.log('alkjslçanksdlnasldkn');
        console.log(error);
        return response.status(404).json({ message: error.message });
      }

      if (error instanceof ServerError) {
        console.log(error);
        return response.status(500).json({ message: error.message });
      }

      if (error instanceof UnauthorizedError) {
        console.log(error);
        return response.status(401).json({ message: 'unauthorized' });
      }

      if (error instanceof UnprocessableEntity) {
        console.log(error);
        return response.status(422).json({ message: error.message });
      }

      console.log(error);
      return response.status(500).json({ message: 'ServerError' });
    });
    app.listen(ENV_PORT, () => {
      console.log(`Server running on port ${ENV_PORT}`);
    });
  }
}
