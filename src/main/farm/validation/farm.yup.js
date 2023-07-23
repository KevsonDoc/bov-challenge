import * as yup from 'yup';
import { ValidationError } from 'yup';
import UnprocessableEntity from '../../erros/core/unprocessable-entity.error';

export default class ValidateFarmWithYup {
  scheema = yup.object().shape({
    farmerId: yup.string().required(),
    cnpj: yup.string().required().max(18),
    corporateName: yup.string().required(),
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
