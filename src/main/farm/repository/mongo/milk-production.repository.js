import { add, set } from 'date-fns';
import MilkProductionModel from './milk-production.model';

export default class MilkProductionRepository {
  milkProductionModel;

  constructor() {
    this.MilkProductionModel = MilkProductionModel;
  }

  async findProductionVolumeForTheMonth(farmId, date) {
    const startDate = set(date, {
      date: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
    const endDate = add(date, { days: 30 });

    const milkProduction = await this.MilkProductionModel.find({
      $and: [
        {
          farm: farmId,
          date: { $gte: startDate },
        },
        {
          farm: farmId,
          date: { $lte: endDate },
        },
      ],
    });
    let volume = 0;

    milkProduction.forEach((milkProductionItem) => {
      volume += milkProductionItem.volume;
    });

    return volume;
  }

  async save({ farmId, ...milkProduction }) {
    await this.MilkProductionModel.create({ ...milkProduction, farm: farmId });
  }
}
