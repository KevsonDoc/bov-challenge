import { add, set } from 'date-fns';
import MilkProductionModel from './milk-production.model';

export default class MilkProductionRepository {
  milkProductionModel;

  constructor() {
    this.milkProductionModel = MilkProductionModel;
  }

  async getVolumeDeliveredForEachDayWithMonthlyAverageUseCase({ farmId, month }) {
    const startDate = set(new Date(), {
      month,
      date: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
    const endDate = add(startDate, { months: 1, days: -1 });

    const milkProduction = await this.milkProductionModel.find({
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

    const data = {
      average: 0,
      days: [],
      pricePerLiter: 0,
    };

    let volumeMonth = 0;
    let total = 0;

    for (let index = 1; index <= endDate.getDate(); index += 1) {
      let volumeDay = 0;
      let totalDay = 0;
      milkProduction
        .filter((milkProductionItem) => milkProductionItem.date.getDate() === index)
        .forEach((milkProductionInDayItem) => {
          volumeDay += milkProductionInDayItem.volume;
          totalDay += milkProductionInDayItem.total;
        });

      volumeMonth += volumeDay;
      total += totalDay;

      data.days.push({
        day: index,
        volume: volumeDay,
      });
    }

    data.average = volumeMonth / endDate.getDate();

    if (total !== 0 && volumeMonth !== 0) {
      data.pricePerLiter = total / volumeMonth;
    }

    return data;
  }

  async findProductionVolumeForTheMonth(farmId, date) {
    const startDate = set(date, {
      date: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });
    const endDate = add(date, { months: 1, days: -1 });

    const milkProduction = await this.milkProductionModel.find({
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
    await this.milkProductionModel.create({ ...milkProduction, farm: farmId });
  }

  async showPricePerMonthByYear({ farmId, year }) {
    const startDate = set(new Date(), {
      year,
      month: 0,
      date: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
      milliseconds: 1,
    });
    const endDate = add(startDate, { years: 1, days: -1 });
    const milkProduction = await this.milkProductionModel.find({
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

    const data = [];

    for (let index = 0; index <= endDate.getUTCMonth(); index += 1) {
      let volumeMonth = 0;
      let totalMonth = 0;

      milkProduction
        .filter((milkProductionItem) => milkProductionItem.date.getUTCMonth() === index)
        .forEach((milkProductionInDayItem) => {
          volumeMonth += milkProductionInDayItem.volume;
          totalMonth += milkProductionInDayItem.total;
        });

      data.push({
        month: index + 1,
        volume: volumeMonth,
        total: totalMonth,
        pricePerLiter: totalMonth === 0 && volumeMonth === 0 ? 0 : totalMonth / volumeMonth,
      });
    }

    return data;
  }
}
