import dotenv from 'dotenv';

dotenv.config();

export const ENV_APPLICATION_PORT = process.env.APPLICATION_PORT;
export const ENV_APPLICATION_SALT_PASSWORD = process.env.APPLICATION_SALT_PASSWORD;
export const ENV_APPLICATION_SECRET = process.env.APPLICATION_SECRET;
export const ENV_DATABASE_USERNAME = process.env.DATABASE_USERNAME;
export const ENV_DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const ENV_DATABASE_PORT = process.env.DATABASE_PORT;
export const ENV_DATABASE_NAME = process.env.DATABASE_NAME;
export const ENV_DATABASE_HOST = process.env.DATABASE_HOST;
