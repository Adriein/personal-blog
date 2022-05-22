export class NotAuthorizedError extends Error {
  constructor() {
    super('User not authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
}