import NotFound from '../../../erros/core/not-found.error';
import UnprocessableEntity from '../../../erros/core/unprocessable-entity.error';
import FarmerModel from './farm.model';

export default class FarmRepository {
  farmerModel;

  constructor() {
    this.farmerModel = FarmerModel;
  }

  async findOneById(id) {
    if (!id) {
      throw new NotFound('Farmer not found');
    }

    const farm = await this.farmerModel.findOne({
      _id: id,
      deletedAt: null,
    });

    if (!farm) {
      throw new NotFound('Farmer not found');
    }

    return { ...farm.toJSON(), id: farm._id, _id: undefined };
  }

  async thereIsAlreadyARegisteredCnpj(cnpj) {
    const farm = await this.farmerModel.findOne({
      cnpj,
      deletedAt: null,
    });

    if (farm) {
      throw new UnprocessableEntity('This cnpj is already registered');
    }
  }

  async save({ farmerId, ...farm }) {
    await this.farmerModel.create({ ...farm, farmer: farmerId });
  }

  async findByFarmerId(farmerId) {
    const farmer = await this.farmerModel.find({
      farmer: farmerId,
      deletedAt: null,
    });

    return farmer;
  }
}
