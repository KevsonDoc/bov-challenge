import { getMonth } from 'date-fns';

export default class MilkProduction {
  id;

  volume = 0;

  price = 0;

  total = 0;

  distance = 0;

  date;

  farmId;

  createdAt;

  constructor(farm) {
    if (!farm.createdAt) {
      this.createdAt = new Date();
    }

    const month = getMonth(farm.date);

    if (month >= 0 && month <= 5) {
      this.price =
        farm.volumeOfMonth * 1.8 -
        (farm.distance <= 50 ? 0.05 * farm.distance : 0.06 * farm.distance) +
        0 * farm.volumeOfMonth;
    } else {
      this.price =
        farm.volumeOfMonth * 1.95 + (farm.volumeOfMonth >= 10000 ? 0.01 * farm.volumeOfMonth : 0);
    }

    this.total = this.price * farm.volume;
    this.date = farm.date;
    this.volume = farm.volume;
    this.farmId = farm.farmId;
    this.distance = farm.distance;
  }
}
