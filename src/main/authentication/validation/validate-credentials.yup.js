import * as yup from 'yup';
import UnprocessableEntity from '../../erros/core/unprocessable-entity.error';

export default class ValidateCredentialsWithYup {
  scheema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
  });

  async validate(credentials) {
    try {
      await this.scheema.validate(credentials);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        throw new UnprocessableEntity(error.message);
      }
    }

    return credentials;
  }
}
