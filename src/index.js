import MongoDatabase from './infra/database/mongo';
import Server from './infra/server';
import {
  ENV_DATABASE_USERNAME,
  ENV_DATABASE_PASSWORD,
  ENV_DATABASE_NAME,
  ENV_DATABASE_PORT,
  ENV_DATABASE_HOST,
} from './util/const/env';

async function bootstrap() {
  await MongoDatabase.connect({
    username: ENV_DATABASE_USERNAME,
    password: ENV_DATABASE_PASSWORD,
    database: ENV_DATABASE_NAME,
    port: ENV_DATABASE_PORT,
    host: ENV_DATABASE_HOST,
  });
  Server.run();
}

bootstrap();
