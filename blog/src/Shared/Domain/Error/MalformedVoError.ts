export class MalformedVoError extends Error {
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, MalformedVoError.prototype);
  }
}