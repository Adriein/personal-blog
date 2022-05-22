export abstract class DomainError extends Error{
  protected constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, DomainError.prototype);
  }
}