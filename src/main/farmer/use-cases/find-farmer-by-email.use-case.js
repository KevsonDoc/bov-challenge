import FarmerRepository from '../repository/mongo/farmer-repository';

class FindFarmerByEmailUseCase {
  farmerRepository;

  constructor(farmerRepository) {
    this.farmerRepository = farmerRepository;
  }

  async execute(email) {
    return this.farmerRepository.findOneByEmail(email);
  }
}

const farmerRepository = new FarmerRepository();
const findFarmerByEmailUseCase = new FindFarmerByEmailUseCase(farmerRepository);

export default findFarmerByEmailUseCase;
