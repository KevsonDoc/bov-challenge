import MilkProductionRepository from '../repository/mongo/milk-production.repository';

class VolumeDeliveredForEachDayWithMonthlyAverageUseCase {
  milkProductionRepository;

  constructor(milkProductionRepository) {
    this.milkProductionRepository = milkProductionRepository;
  }

  async execute({ farmId, month }) {
    return this.milkProductionRepository.getVolumeDeliveredForEachDayWithMonthlyAverageUseCase({
      farmId,
      month,
    });
  }
}

const milkProductionRepository = new MilkProductionRepository();
const volumeDeliveredForEachDayWithMonthlyAverageUseCase =
  new VolumeDeliveredForEachDayWithMonthlyAverageUseCase(milkProductionRepository);

export default volumeDeliveredForEachDayWithMonthlyAverageUseCase;
