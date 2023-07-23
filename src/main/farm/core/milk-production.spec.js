import { describe, expect, test } from 'vitest';
import MilkProduction from './milk-production';

describe('farm', () => {
  test('Should Test ProductionMilk Core Integrity', async () => {
    const milkProduction = new MilkProduction({
      volumeOfMonth: 100,
      distance: 20,
      volume: 300,
      date: new Date('2023-03-01'),
    });
    expect(milkProduction).toHaveProperty('id');
    expect(milkProduction).toHaveProperty('volume');
    expect(milkProduction).toHaveProperty('price');
    expect(milkProduction).toHaveProperty('total');
    expect(milkProduction).toHaveProperty('distance');
    expect(milkProduction).toHaveProperty('farmId');
    expect(milkProduction).toHaveProperty('createdAt');
  });

  test('Shoud compute milk production between may and june with a distance of less than 50KM.', async () => {
    const milkProduction = new MilkProduction({
      volumeOfMonth: 100,
      distance: 20,
      volume: 300,
      date: new Date('2023-03-01'),
    });

    expect(milkProduction.price).equal(179);
    expect(milkProduction.total).equal(53700);
  });

  test('Shoud compute milk production between august and december with a distance of less than 50KM.', async () => {
    const milkProduction = new MilkProduction({
      volumeOfMonth: 100,
      distance: 20,
      volume: 300,
      date: new Date('2023-08-01'),
    });

    expect(milkProduction.price).equal(195.01);
    expect(milkProduction.total).equal(58503);
  });

  // Preço = (Volume do mês * Preço base) - (Custo por KM * distância da fazenda até a fábrica) + (Bônus p/ produção * litros entregues no mês)
  test('Shoud compute milk production between may and hune with a distance of more than 50KM.', async () => {
    const milkProduction = new MilkProduction({
      volumeOfMonth: 100,
      distance: 60,
      volume: 300,
      date: new Date('2023-03-01'),
    });

    expect(milkProduction.price).equal(176.4);
    expect(milkProduction.total).equal(52920);
  });

  test('Shoud compute milk production between august and december with a distance of more than 50KM.', async () => {
    const milkProduction = new MilkProduction({
      volumeOfMonth: 100,
      distance: 60,
      volume: 300,
      date: new Date('2023-08-01'),
    });

    expect(milkProduction.price).equal(195.01);
    expect(milkProduction.total).equal(58503);
  });
});
