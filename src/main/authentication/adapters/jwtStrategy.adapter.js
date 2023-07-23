import jsonwebtoken from 'jsonwebtoken';
import { ENV_APPLICATION_SECRET } from '../../../util/const/env';
import UnauthorizedError from '../../erros/core/unauthorized.error';

export default class JwtStrategy {
  constructor() {
    this.jwt = jsonwebtoken;
  }

  sign(farmerId) {
    const token = this.jwt.sign({ farmerId }, ENV_APPLICATION_SECRET, { expiresIn: '3h' });
    return token;
  }

  verify(token) {
    if (!token) {
      throw new UnauthorizedError();
    }

    const parts = token.split(' ');

    if (!parts.length === 2) {
      throw new UnauthorizedError();
    }

    const [scheme, hash] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      throw new UnauthorizedError();
    }

    try {
      const payload = this.jwt.verify(hash, ENV_APPLICATION_SECRET);
      return payload.farmerId;
    } catch (error) {
      throw new UnauthorizedError();
    }
  }
}
