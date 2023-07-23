import bcrypt from 'bcrypt';
import { ENV_APPLICATION_SALT_PASSWORD } from '../../../util/const/env';
import UnauthorizedError from '../../erros/core/unauthorized.error';

export default class BcryptAdapter {
  constructor() {
    this.bcrypt = bcrypt;
  }

  async generateHash(password) {
    const hash = await this.bcrypt.hash(password, +ENV_APPLICATION_SALT_PASSWORD);
    return hash;
  }

  async compare({ password, hash }) {
    const match = await this.bcrypt.compare(password, hash);

    if (!match) {
      throw new UnauthorizedError('Invalid credentials');
    }
  }
}
