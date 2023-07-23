import mongoose from 'mongoose';
import ServerError from '../../../main/erros/core/server.error';

export default class MongoDatabase {
  static async connect({ username, password, database, port, host }) {
    try {
      const url = `mongodb://${host}:${port}/${database}`;
      await mongoose.connect(url, {
        authSource: 'admin',
        user: username,
        pass: password,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      throw new ServerError('Error connecting to MongoDB:');
    }
  }
}
