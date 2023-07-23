import MilkProductionRepository from '../repository/mongo/milk-production.repository';

class ShowPricePerLiterByMonthPaidUseCase {
  milkProductionRepository;

  constructor(milkProductionRepository) {
    this.milkProductionRepository = milkProductionRepository;
  }

  async execute({ farmId, month }) {
    const data =
      await this.milkProductionRepository.getVolumeDeliveredForEachDayWithMonthlyAverageUseCase({
        farmId,
        month,
      });

    const priceBrasil = data.pricePerLiter.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    const priceEnglish = data.pricePerLiter.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return {
      pricePerLiter: {
        priceBrasil,
        priceEnglish,
      },
    };
  }
}

const milkProductionRepository = new MilkProductionRepository();
const showPricePerLiterByMonthPaidUseCase = new ShowPricePerLiterByMonthPaidUseCase(
  milkProductionRepository,
);
export default showPricePerLiterByMonthPaidUseCase;
