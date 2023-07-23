import * as yup from 'yup';
import { ValidationError } from 'yup';
import UnprocessableEntity from '../../erros/core/unprocessable-entity.error';

export default class MilkProductionYup {
  scheema = yup.object().shape({
    volume: yup.number().required(),
    distance: yup.number().required(),
    date: yup.date().required(),
    farmId: yup.string().required(),
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
