import bcrypt from 'bcrypt';
import { ENV_SALT_PASSWORD } from '../../../util/const/env';

export default class CreateHassWithBcrypt {
  constructor() {
    this.bcrypt = bcrypt;
  }

  async execute(password) {
    const hash = await this.bcrypt.hash(password, +ENV_SALT_PASSWORD);
    return hash;
  }
}
