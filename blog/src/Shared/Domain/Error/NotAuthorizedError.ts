import { DomainError } from "Shared/Domain/Error/DomainError";

export class NotAuthorizedError extends DomainError {
  constructor() {
    super('User not authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }
}