import FarmerRepository from '../repository/mongo/farmer.repository';
import farmerViewJson from '../view/show-farmer-json.view';

class ShowFarmerByIdUseCase {
  farmerRepository;

  farmerView;

  constructor(farmerRepository, farmerView) {
    this.farmerRepository = farmerRepository;
    this.farmerView = farmerView;
  }

  async execute(farmerId) {
    const farmer = await this.farmerRepository.findOneById(farmerId);
    return this.farmerView(farmer);
  }
}

const farmerRepository = new FarmerRepository();
const showFarmerByIdUseCase = new ShowFarmerByIdUseCase(farmerRepository, farmerViewJson);

export default showFarmerByIdUseCase;
