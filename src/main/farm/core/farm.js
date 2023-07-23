export default class Farm {
  id;

  cnpj;

  corporateName;

  farmerId;

  createdAt;

  updatedAt = null;

  deletedAt = null;

  constructor(farm) {
    if (!farm?.createdAt) {
      this.createdAt = new Date();
    }

    Object.assign(this, farm);
  }

  update(farm) {
    if (!this.id && !this.createdAt) {
      throw new Error('Invalid farm');
    }

    Object.assign(this, farm);
    this.update = new Date();
  }

  delete() {
    if (!this.id && !this.createdAt) {
      throw new Error('Invalid farm');
    }

    this.delete = new Date();
  }
}
