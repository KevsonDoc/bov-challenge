import { describe, expect, test } from 'vitest';
import Farm from './farm';

describe('farm', () => {
  test("Should Test Farm's Core Integrity", async () => {
    const farmer = new Farm();
    expect(farmer).toHaveProperty('id');
    expect(farmer).toHaveProperty('cnpj');
    expect(farmer).toHaveProperty('corporateName');
    expect(farmer).toHaveProperty('createdAt');
    expect(farmer).toHaveProperty('updatedAt');
    expect(farmer).toHaveProperty('deletedAt');
  });
});
