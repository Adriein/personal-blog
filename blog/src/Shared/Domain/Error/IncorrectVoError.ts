import { DomainError } from "Shared/Domain/Error/DomainError";

export class IncorrectVoError extends DomainError {
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, IncorrectVoError.prototype);
  }
}