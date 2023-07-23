export default class UnprocessableEntity extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnprocessableEntity';
  }
}
