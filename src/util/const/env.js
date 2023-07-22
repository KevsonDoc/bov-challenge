import dotenv from 'dotenv';

dotenv.config();

const ENV_PORT = process.env.APPLICATION_PORT;

export default ENV_PORT;
