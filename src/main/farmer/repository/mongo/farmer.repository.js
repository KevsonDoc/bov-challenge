import NotFound from '../../../erros/core/not-found.error';
import UnauthorizedError from '../../../erros/core/unauthorized.error';
import UnprocessableEntity from '../../../erros/core/unprocessable-entity.error';
import FarmerModel from './farmer.model';

export default class FarmerRepository {
  farmerModel;

  constructor() {
    this.farmerModel = FarmerModel;
  }

  async findOneByEmail(email) {
    if (!email) {
      throw new UnauthorizedError('Invalid credentials');
    }

    const farmer = await this.farmerModel.findOne({
      email,
      deletedAt: null,
    });

    return { id: farmer.id, email: farmer?.email, password: farmer?.password };
  }

  async findOneById(id) {
    if (!id) {
      throw new NotFound('Farmer not found');
    }

    const farmer = await this.farmerModel.findOne({
      _id: id,
      deletedAt: null,
    });

    if (!farmer) {
      throw new NotFound('Farmer not found');
    }

    return { ...farmer.toJSON(), id: farmer._id, _id: undefined };
  }

  async thereIsAlreadyARegisteredEmail(email) {
    const farmer = await this.farmerModel.findOne({
      email,
      deletedAt: null,
    });

    if (farmer) {
      throw new UnprocessableEntity('This e-mail is already registered');
    }
  }

  async thereIsAlreadyARegisteredCpf(cpf) {
    const farmer = await this.farmerModel.findOne({
      cpf,
      deletedAt: null,
    });

    if (farmer) {
      throw new UnprocessableEntity('This cpf is already registered');
    }
  }

  async save(farmer) {
    await this.farmerModel.create(farmer);
  }
}
