import * as yup from 'yup';
import { ValidationError } from 'yup';
import UnprocessableEntity from '../../erros/core/unprocessable-entity.error';

export default class ValidateFarmerWithYup {
  scheema = yup.object().shape({
    name: yup.string().required().max(40),
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    cpf: yup.string().required().min(14).max(14),
  });

  async validate(farmer) {
    try {
      await this.scheema.validate(farmer);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new UnprocessableEntity(error.message);
      }
    }

    return farmer;
  }
}
