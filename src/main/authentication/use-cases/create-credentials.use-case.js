import BcryptAdapter from '../adapters/bcrypt.adapter';
import ValidateCredentialsWithYup from '../validation/validate-credentials.yup';

class CreateCredentialsUseCase {
  encryptionAdapter;

  validateCredentialsAdapter;

  constructor(validateCredentialsAdapter, encryptionAdapter) {
    this.validateCredentialsAdapter = validateCredentialsAdapter;
    this.encryptionAdapter = encryptionAdapter;
  }

  async execute(credentials) {
    await this.validateCredentialsAdapter.validate(credentials);
    const hash = await this.encryptionAdapter.generateHash(credentials.password);
    return {
      email: credentials.email,
      password: hash,
    };
  }
}

const validateCredentialsAdapter = new ValidateCredentialsWithYup();
const encryptionAdapter = new BcryptAdapter();
const createCredentialsUseCase = new CreateCredentialsUseCase(
  validateCredentialsAdapter,
  encryptionAdapter,
);
export default createCredentialsUseCase;
