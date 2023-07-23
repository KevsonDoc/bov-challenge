import NotFound from '../../../erros/core/not-found.error';
import UnprocessableEntity from '../../../erros/core/unprocessable-entity.error';
import FarmerModel from './farmer.model';

export default class FarmerRepository {
  farmerModel;

  constructor() {
    this.farmerModel = FarmerModel;
  }

  async findOneById(id) {
    if (!id) {
      throw new NotFound('Farmer not found');
    }

    const farmer = await this.farmerModel.findOne({
      id,
      deletedAt: {
        $exists: false,
      },
    });

    if (!farmer) {
      throw new NotFound('Farmer not found');
    }
  }

  async thereIsAlreadyARegisteredEmail(email) {
    const farmer = await this.farmerModel.findOne({
      email,
      deletedAt: { $exists: false },
    });

    if (farmer) {
      throw new UnprocessableEntity('This e-mail is already registered');
    }
  }

  async thereIsAlreadyARegisteredCpf(cpf) {
    const farmer = await this.farmerModel.findOne({
      cpf,
      deletedAt: {
        $exists: true,
      },
    });

    if (farmer) {
      throw new UnprocessableEntity('This cpf is already registered');
    }
  }

  async save(farmer) {
    await this.farmerModel.create(farmer);
  }
}
