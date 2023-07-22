import path from 'path';

const SWAGGER_OPTIONS = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
      description: 'API documentation with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3333', // Replace this with your server URL
      },
    ],
  },
  // Path to the API specs
  apis: [path.join('..', '..', 'infra', 'route', '*.js')],
};

export default SWAGGER_OPTIONS;
