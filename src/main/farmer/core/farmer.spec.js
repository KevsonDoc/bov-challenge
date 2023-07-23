import { describe, expect, test } from 'vitest';
import Farmer from './farmer';

describe('farmer', () => {
  test("Should Test Farmer's Core Integrity", async () => {
    const farmer = new Farmer();
    expect(farmer).toHaveProperty('id');
    expect(farmer).toHaveProperty('email');
    expect(farmer).toHaveProperty('cpf');
    expect(farmer).toHaveProperty('password');
    expect(farmer).toHaveProperty('createdAt');
    expect(farmer).toHaveProperty('updatedAt');
    expect(farmer).toHaveProperty('deletedAt');
  });
});
