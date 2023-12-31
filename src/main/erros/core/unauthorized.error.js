export default class UnauthorizedError extends Error {
  constructor(message) {
    super(message ?? 'Unauthorized');
    this.name = 'UnauthorizedError';
  }
}
