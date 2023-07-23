import { v4 as uuid } from 'uuid';

export default class Farmer {
  id;

  name;

  email;

  cpf;

  password;

  createdAt;

  updatedAt;

  deletedAt;

  constructor(farm) {
    if (!farm?.id) {
      this.id = uuid();
    }

    if (!farm?.createdAt) {
      this.createdAt = new Date();
    }

    Object.assign(this, farm);
  }

  update(farm) {
    if (!this.id && !this.createdAt) {
      throw new Error('Invalid farmer');
    }

    Object.assign(this, farm);
    this.update = new Date();
  }

  delete() {
    if (!this.id && !this.createdAt) {
      throw new Error('Invalid farmer');
    }

    this.delete = new Date();
  }
}
