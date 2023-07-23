import { parseISO } from 'date-fns';
import MilkProduction from '../core/milk-production';
import MilkProductionRepository from '../repository/mongo/milk-production.repository';
import MilkProductionYup from '../validation/milk-production.yup';

class AddMilkProductionUseCase {
  mildkProductionRepository;

  milkProductionValidation;

  constructor(mildkProductionRepository, milkProductionValidation) {
    this.mildkProductionRepository = mildkProductionRepository;
    this.milkProductionValidation = milkProductionValidation;
  }

  async execute(milkProductionData) {
    await this.milkProductionValidation.validate({
      ...milkProductionData,
      date: parseISO(milkProductionData.date),
    });
    const volumeOfMonth = await this.mildkProductionRepository.findProductionVolumeForTheMonth(
      milkProductionData.farmId,
      parseISO(milkProductionData.date),
    );
    const milkProduction = new MilkProduction({
      ...milkProductionData,
      date: parseISO(milkProductionData.date),
      volumeOfMonth,
    });
    await this.mildkProductionRepository.save(milkProduction);
  }
}

const milkProductionRepository = new MilkProductionRepository();
const milkProductionValidation = new MilkProductionYup();
const addMilkProductionUseCase = new AddMilkProductionUseCase(
  milkProductionRepository,
  milkProductionValidation,
);
export default addMilkProductionUseCase;
