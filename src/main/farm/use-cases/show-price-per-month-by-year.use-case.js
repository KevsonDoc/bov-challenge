import MilkProductionRepository from '../repository/mongo/milk-production.repository';

class ShowPricePerMonthByYearUseCase {
  milkProductionRepository;

  constructor(milkProductionRepository) {
    this.milkProductionRepository = milkProductionRepository;
  }

  async execute({ farmId, year }) {
    const data = this.milkProductionRepository.showPricePerMonthByYear({ farmId, year });
    return data;
  }
}

const milkProductionRepository = new MilkProductionRepository();
const showPricePerMonthByYearUseCase = new ShowPricePerMonthByYearUseCase(milkProductionRepository);
export default showPricePerMonthByYearUseCase;
