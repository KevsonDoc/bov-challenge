import express from 'express';
import swaggerUi from 'swagger-ui-express';
import ENV_PORT from '../../util/const/env';
import SWAGGER_OPTIONS from '../../../swagger.json';

export default class Server {
  static run() {
    const app = express();

    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(SWAGGER_OPTIONS));
    app.listen(ENV_PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running on port ${ENV_PORT}`);
    });
  }
}
