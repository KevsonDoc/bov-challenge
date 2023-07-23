import FarmRepository from '../repository/mongo/farm.repository';

class ListFarmsOfUserUseCase {
  farmerRepository;

  constructor(farmerRepository) {
    this.farmerRepository = farmerRepository;
  }

  async execute(farmerId) {
    const farmer = await this.farmerRepository.findByFarmerId(farmerId);
    return farmer;
  }
}

const farmRepository = new FarmRepository();
const listFarmsOfUserUseCase = new ListFarmsOfUserUseCase(farmRepository);

export default listFarmsOfUserUseCase;
