import CreateHassWithBcrypt from '../adapters/create-has-with-bcrypt.adapter';
import ValidateCredentialsWithYup from '../validation/validate-credentials.yup';

class CreateCredentialsUseCase {
  createHashAdapter;

  validateCredentialsAdapter;

  constructor(validateCredentialsAdapter, createHashAdapter) {
    this.validateCredentialsAdapter = validateCredentialsAdapter;
    this.createHashAdapter = createHashAdapter;
  }

  async execute(credentials) {
    await this.validateCredentialsAdapter.validate(credentials);
    const hash = await this.createHashAdapter.execute(credentials.password);
    return {
      email: credentials.email,
      password: hash,
    };
  }
}

const validateCredentialsAdapter = new ValidateCredentialsWithYup();
const createCredentialsAdapter = new CreateHassWithBcrypt();
const createCredentialsUseCase = new CreateCredentialsUseCase(
  validateCredentialsAdapter,
  createCredentialsAdapter,
);
export default createCredentialsUseCase;
