export class RecordNotFoundError extends Error {
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, RecordNotFoundError.prototype);
  }
}