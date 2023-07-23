import createCredentialsUseCase from '../../authentication/use-cases/create-credentials.use-case';
import Farmer from '../core/farmer';
import FarmerRepository from '../repository/mongo/farmer-repository';
import ValidateFarmerWithYup from '../validation/validate-farmer.yup';

class AddFarmerToSystemUseCase {
  farmerValidatorAdapter;

  farmerRepository;

  createCredentialsAdapter;

  farmerData;

  constructor(farmerValidatorAdapter, farmerRepository, createCredentialsAdapter) {
    this.farmerValidatorAdapter = farmerValidatorAdapter;
    this.farmerRepository = farmerRepository;
    this.createCredentialsAdapter = createCredentialsAdapter;
  }

  async execute(farmerData) {
    await this.farmerValidatorAdapter.validate(farmerData);
    await this.farmerRepository.thereIsAlreadyARegisteredEmail(farmerData.email);
    await this.farmerRepository.thereIsAlreadyARegisteredCpf(farmerData.cpf);
    const { password } = await this.createCredentialsAdapter.execute({
      email: farmerData.email,
      password: farmerData.password,
    });
    const farmer = new Farmer({ ...farmerData, password });
    await this.farmerRepository.save(farmer);
  }
}

const farmerValidator = new ValidateFarmerWithYup();
const farmerRepository = new FarmerRepository();

const addFarmerToSystemUseCase = new AddFarmerToSystemUseCase(
  farmerValidator,
  farmerRepository,
  createCredentialsUseCase,
);

export default addFarmerToSystemUseCase;
