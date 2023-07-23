import findFarmerByEmailUseCase from '../../farmer/use-cases/find-farmer-by-email.use-case';
import BcryptAdapter from '../adapters/bcrypt.adapter';
import JwtStrategy from '../adapters/jwtStrategy.adapter';

class SignUseCase {
  authenticationAdapter;

  findFarmerByEmailUseCase;

  encryptionAdapter;

  constructor(authenticationAdapter, findFarmerByEmail, encryptionAdapter) {
    this.authenticationAdapter = authenticationAdapter;
    this.findFarmerByEmailUseCase = findFarmerByEmail;
    this.encryptionAdapter = encryptionAdapter;
  }

  async execute(credentials) {
    const farmer = await this.findFarmerByEmailUseCase.execute(credentials.email);
    await this.encryptionAdapter.compare({ password: credentials.password, hash: farmer.password });
    return this.authenticationAdapter.sign(farmer.id);
  }
}

const jwtAdapter = new JwtStrategy();
const encryptionAdapter = new BcryptAdapter();
const signUseCase = new SignUseCase(jwtAdapter, findFarmerByEmailUseCase, encryptionAdapter);

export default signUseCase;
