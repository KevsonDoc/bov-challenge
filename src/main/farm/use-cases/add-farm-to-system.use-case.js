import Farm from '../core/farm';
import FarmRepository from '../repository/mongo/farm.repository';
import ValidateFarmWithYup from '../validation/farm.yup';

class AddFarmToSystemUseCase {
  constructor(farmValidatorAdapter, farmRepository) {
    this.farmValidatorAdapter = farmValidatorAdapter;
    this.farmRepository = farmRepository;
  }

  async execute(farmData) {
    await this.farmValidatorAdapter.validate(farmData);
    await this.farmRepository.thereIsAlreadyARegisteredCnpj(farmData.cnpj);
    const farm = new Farm(farmData);
    await this.farmRepository.save(farm);
  }
}

const farmValidator = new ValidateFarmWithYup();
const farmRepository = new FarmRepository();
const addFarmToSystemUseCase = new AddFarmToSystemUseCase(farmValidator, farmRepository);

export default addFarmToSystemUseCase;
