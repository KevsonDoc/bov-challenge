export default class Farmer {
  id;

  name;

  email;

  cpf;

  password;

  createdAt;

  updatedAt = null;

  deletedAt = null;

  constructor(farmer) {
    if (!farmer?.createdAt) {
      this.createdAt = new Date();
    }

    Object.assign(this, farmer);
  }

  update(farmer) {
    if (!this.id && !this.createdAt) {
      throw new Error('Invalid farmer');
    }

    Object.assign(this, farmer);
    this.update = new Date();
  }

  delete() {
    if (!this.id && !this.createdAt) {
      throw new Error('Invalid farmer');
    }

    this.delete = new Date();
  }
}
